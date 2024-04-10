let User_Score = 0;
let Computer_Score = 0;

const Choice = document.querySelectorAll(".Choice");
const Message = document.querySelector("#Message");

const User_Score_Point = document.querySelector("#User_Score");
const computer_Score_Point = document.querySelector("#Computer_Score");

const Genarate_Computer_Choice = () => {
  // Randomly Genarate Computer Choice
  const Options = ["Rock", "Paper", "Scissors"];
  const Random_Index = Math.floor(Math.random() * 3);
  return Options[Random_Index];
};

const Show_Winner = (User_Win, User_Choice, Computer_Choice) => {
  if (User_Win) {
    User_Score++;
    User_Score_Point.innerText = User_Score;
    Message.innerText = `You Win, Your ${User_Choice} beats ${Computer_Choice}..!!`;
    Message.style.backgroundColor = "green";
  } else {
    Computer_Score++;
    computer_Score_Point.innerText = Computer_Score;
    Message.innerText = `You Lost, Computer ${Computer_Choice} beats ${User_Choice}..!!`;
    Message.style.backgroundColor = "red";
  }
};

const Play_Game = (User_Choice) => {
  const Computer_Choice = Genarate_Computer_Choice();
  console.log("Computer Choose", Computer_Choice);

  if (User_Choice === Computer_Choice) {
    // IF DRAW
    console.log("It's A Draw..!!");
    Message.innerText = `It's A Draw..!!`;
    Message.style.backgroundColor = "#081b31";
  } else {
    let User_Win = true;
    if (User_Choice === "Rock") {
      // Paper or Scissors
      User_Win = Computer_Choice == "Paper" ? false : true;
    } else if (User_Choice === "Paper") {
      // Scissors or Rock
      User_Win = Computer_Choice == "Scissors" ? false : true;
    } else {
      //Rock or Paper
      User_Win = Computer_Choice == "Rock" ? false : true;
    }
    Show_Winner(User_Win, User_Choice, Computer_Choice);
  }
};

Choice.forEach((Choice) => {
  Choice.addEventListener("click", () => {
    let User_Choice = Choice.getAttribute("id");
    console.log("You Choose", User_Choice);
    Play_Game(User_Choice);
  });
});
