import React from 'react';
import { calculateInvestmentResults, formatter } from '../utils/investment';

export default function Results({ input }) {
   let resultsData = calculateInvestmentResults(input);
   const initialInvestment =
      resultsData[0].valueEndOfYear -
      resultsData[0].interest -
      resultsData[0].annualInvestment;
   return (
      <table id='result'>
         <thead>
            <tr>
               <th>Year</th>
               <th>Investment Value</th>
               <th>Interest (year)</th>
               <th>Total Interest</th>
               <th>Invested Capital</th>
            </tr>
         </thead>
         <tbody>
            {resultsData.map(yearData => {
               const totalInterst =
                  yearData.valueEndOfYear -
                  yearData.annualInvestment * yearData.year -
                  initialInvestment;
               const totalAmountInvested = yearData.valueEndOfYear - totalInterst;
               return (<tr>
                  <td>{yearData.year}</td>
                  <td>{formatter.format(yearData.valueEndOfYear)}</td>
                  <td>{formatter.format(yearData.interest)}</td>
                  <td>{formatter.format(totalInterst)}</td>
                  <td>{formatter.format(totalAmountInvested)}</td>
               </tr>);
            })}
         </tbody>
      </table>
   );
}
