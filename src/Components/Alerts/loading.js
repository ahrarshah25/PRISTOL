import Swal from "sweetalert2";

const showLoading = () => {
  Swal.fire({
    toast: true,
    position: "top-end",
    title: "Processing...",
    didOpen: () => {
      Swal.showLoading();
    },
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    customClass: {
      popup: "swal-margin-top",
    },
  });
};

export default showLoading;