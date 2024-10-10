import React from 'react';

export default function UserInput({ userInput, onChange }) {
   return (
      <section id="user-input">
         <div className="input-group">
            <p>
               <label htmlFor="initialInvestment">Initial Investment</label>
               <input
                  id='initialInvestment'
                  type="number"
                  required
                  value={userInput.initialInvestment}
                  onChange={() => onChange("initialInvestment", event.target.value)}
               />
            </p>
            <p>
               <label htmlFor="annualInvestment">Annual Investment</label>
               <input
                  id='annualInvestment'
                  type="number"
                  required
                  value={userInput.annualInvestment}
                  onChange={() => onChange("annualInvestment", event.target.value)}
               />
            </p>
         </div>
         <div className="input-group">
            <p>
               <label htmlFor="expectedReturn">Expected Return</label>
               <input
                  id='expectedReturn'
                  type="number"
                  required
                  value={userInput.expectedReturn}
                  onChange={() => onChange("expectedReturn", event.target.value)}
               />
            </p>
            <p>
               <label htmlFor="duration">Duration</label>
               <input
                  id='duration'
                  type="number"
                  required
                  value={userInput.duration}
                  onChange={() => onChange("duration", event.target.value)}
               />
            </p>
         </div>
      </section>
   );
}
