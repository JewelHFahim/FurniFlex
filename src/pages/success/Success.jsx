import { useEffect } from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "react-use";

const Success = () => {
  const { width, height } = useWindowSize();
  const navigate = useNavigate();


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden min-h-screen gap-2">
      {/* Set Confetti width and height to window size */}
      <Confetti width={width} height={height} />

      <h2 className="text-2xl md:text-5xl text-green-500">
        Order Placed Successfully!
      </h2>
      <p className="font-medium">We sent the invoice to your e-mail.</p>
    </div>
  );
};

export default Success;
