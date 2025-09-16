import React from "react";

function QNA() {
  return (
    <div className="md:w-4/5 mx-auto my-20 space-y-4">
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">What is Zuno? </div>
        <div className="collapse-content text-sm">
          Zuno combines AI technology with real psychology-based techniques,
          offering support that adapts to your mood, routine, and specific
          challenges like anxiety, sleep, libido, and focus.
        </div>
      </div>
      <div className="collapse collapse-plus text-black ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Is Zuno a replacement for therapy?{" "}
        </div>
        <div className="collapse-content text-sm">
          No. Zuno is a powerful daily tool for emotional well-being, but it’s
          not a medical service or a substitute for professional therapy. It’s
          here to support you, not replace clinical care
        </div>
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">Who is Zuno for? </div>
        <div className="collapse-content text-sm">Go to settings and sel</div>
      </div>
    </div>
  );
}

export default QNA;
