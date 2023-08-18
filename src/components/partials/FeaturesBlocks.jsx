import React, {useState} from "react";
import {StarIcon, ClockIcon} from "@heroicons/react/24/solid";

function FeaturesBlocks() {
  const [show, setShow] = useState(false)
  return (
    <section  id='' className="relative">
    <img className="w-full mx-auto" src="/img/two.jpg" alt="" />
</section>
  );
}

export default FeaturesBlocks;
