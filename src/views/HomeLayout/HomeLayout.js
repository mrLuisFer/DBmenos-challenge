import React, { useEffect, useState } from "react";
// Components
import Loader from "../../components/Loader/Loader";
import Films from "../../components/Films/Films";

export default function HomeLayout() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <section>
          <Films />
        </section>
      )}
    </>
  );
}
