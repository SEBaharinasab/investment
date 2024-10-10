import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });
  const userInputIsValid = userInput.duration > 0;
  const handleChangeInput = (inputIdentifier, newValue) => {
    setUserInput(prevUserInput => ({ ...prevUserInput, [inputIdentifier]: +newValue }));
  };
  return (<>
    <Header />
    <UserInput onChange={handleChangeInput} userInput={userInput} />
    {userInputIsValid
      ? (<Results input={userInput} />)
      : (<p className="center">Please enter a duration greater than zero!</p>)
    }
  </>);
}

export default App;
