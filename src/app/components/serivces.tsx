"use client";
import React, { useState } from "react";

export default function Services() {
  const [activeSteps, setActiveSteps] = useState([0]);

  const handleStepClick = (index: integer) => {
    if (!activeSteps.includes(index)) {
      setActiveSteps([...activeSteps, index]);
    }
  };

  return (
    <article className="flex flex-col lg:flex-row gap-14 p-8">
      <ul className="steps steps-horizontal lg:steps-vertical">
        <li
          className={activeSteps.includes(0) ? "step step-secondary" : "step"}
        >
          Tener una idea
        </li>
        <li
          className={activeSteps.includes(1) ? "step step-secondary" : "step"}
        >
          Primer Contacto
        </li>
        <li
          className={activeSteps.includes(2) ? "step step-secondary" : "step"}
        >
          Diseño y Programación
        </li>
        <li
          className={activeSteps.includes(3) ? "step step-secondary" : "step"}
        >
          Publicación
        </li>
      </ul>
      <div className="flex flex-col gap-4">
        {/* Primer paso */}
        <div
          tabIndex={0}
          className={
            activeSteps.includes(0)
              ? "collapse collapse-arrow border border-base-300 bg-base-200 active"
              : "collapse collapse-arrow border border-base-300 bg-base-200"
          }
          onClick={() => handleStepClick(0)}
        >
          <div className="collapse-title text-xl font-medium">
            Tener una idea
          </div>
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        {/* Segundo paso */}
        <div
          tabIndex={0}
          className={
            activeSteps.includes(1)
              ? "collapse collapse-arrow border border-base-300 bg-base-200 active"
              : "collapse collapse-arrow border border-base-300 bg-base-200"
          }
          onClick={() => handleStepClick(1)}
        >
          <div className="collapse-title text-xl font-medium">
            Primer Contacto
          </div>
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        {/* Tercero paso */}
        <div
          tabIndex={0}
          className={
            activeSteps.includes(2)
              ? "collapse collapse-arrow border border-base-300 bg-base-200 active"
              : "collapse collapse-arrow border border-base-300 bg-base-200"
          }
          onClick={() => handleStepClick(2)}
        >
          <div className="collapse-title text-xl font-medium">
            Diseño y Programación
          </div>
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        {/* Cuarto paso */}
        <div
          tabIndex={0}
          className={
            activeSteps.includes(3)
              ? "collapse collapse-arrow border border-base-300 bg-base-200 active"
              : "collapse collapse-arrow border border-base-300 bg-base-200"
          }
          onClick={() => handleStepClick(3)}
        >
          <div className="collapse-title text-xl font-medium">Publicación</div>
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
      </div>
    </article>
  );
}
