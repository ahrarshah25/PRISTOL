import Swal from "sweetalert2";

const fireAlert = (icon,title) => {
  Swal.fire({
    toast: true,
    position: "top-end",
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 2000,
    customClass: {
      popup: "swal-margin-top",
    },
  });
};

export default fireAlert;