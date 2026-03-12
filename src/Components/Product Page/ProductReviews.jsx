import React, { useState, useEffect } from 'react';
import { collection, query, where, orderBy, getDocs, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import ReviewCard from '../Reviews/ReviewCard';
import ReviewForm from '../Reviews/ReviewForm';
import { MessageSquare, Star } from 'lucide-react';
import fireAlert from '../Alerts/alert';
import showLoading from '../Alerts/loading';
import Swal from 'sweetalert2';

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (productId) {
      fetchReviews();
    } else {
      setReviews([]);
      setLoading(false);
      console.warn('ProductReviews: productId is undefined');
    }
  }, [productId]);

  const fetchReviews = async () => {
    try {
      const q = query(
        collection(db, 'productReviews'),
        where('productId', '==', productId),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      const reviewsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setReviews(reviewsData);
    } catch (error) {
      console.error('Error fetching product reviews:', error);
      fireAlert('error', 'Failed to load reviews');
    } finally {
      setLoading(false);
    }
  };

  const handleAddReview = async (reviewData) => {
    
    if (!productId) {
      fireAlert('error', 'Product ID is missing. Cannot submit review.');
      return;
    }

    const loader = showLoading('Submitting your review...');
    try {
      await addDoc(collection(db, 'productReviews'), {
        ...reviewData,
        productId,
        createdAt: Timestamp.now().toMillis()
      });
      Swal.close(loader);
      fireAlert('success', 'Review added successfully!');
      setShowForm(false);
      fetchReviews();
    } catch (error) {
      console.error('Error adding review:', error);
      Swal.close(loader);
      fireAlert('error', 'Failed to add review');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <div className="w-8 h-8 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Customer Reviews ({reviews.length})</h3>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2 text-sm"
        >
          <Star className="w-4 h-4" />
          Write a Review
        </button>
      </div>

      {reviews.length === 0 ? (
        <div className="text-center py-10 bg-gray-50 rounded-xl">
          <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500">No reviews yet for this product.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}

      {showForm && (
        <ReviewForm
          onSubmit={handleAddReview}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default ProductReviews;