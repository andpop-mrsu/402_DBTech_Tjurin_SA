import View from "./View.js";

class Controller {
    generateSecretNumber() {
        const arrayNumbers = [];
        const length = 3;

        while (arrayNumbers.length !== length) {
            const number = Math.floor(Math.random() * 9) + 1;

            if (!arrayNumbers.includes(number)) {
                arrayNumbers.push(number);
            }
        }

        const result = arrayNumbers.join("");

        return result;
    }

    menu() {
        const screen = document.getElementById("screen");

        screen.textContent = "";

        const view = new View();

        view.showMenu();

        const start = document.getElementById("start");
            
        start.addEventListener("click", () => {
            this.startGame();            
        })
    }

    startGame() {
        let hints = [];

        const secretNumber = this.generateSecretNumber();
        const view = new View();
        const screen = document.getElementById("screen");

        screen.textContent = "";

        // console.log(secretNumber);

        var button = document.getElementById("submit");
        var exit = document.getElementById("exit");
        var data = document.getElementById("data");

        data.removeAttribute("hidden");

        view.showMessage("Введите число", "robot");

        button.addEventListener("click", () => {
            const userData = document.getElementById("input").value;

            document.getElementById("input").value = "";

            view.showMessage(userData, "user");

            if (userData.length === secretNumber.length) {
                
                hints = [];

                for (let i = 0; i < secretNumber.length; i++) {
                    if (secretNumber[i] === userData[i]) {
                        hints.push('Горячо');
                    } else if (secretNumber.includes(userData[i])) {
                        hints.push('Тепло');
                    } else {
                        hints.push('Холодно');
                    }
                }

                hints.sort();

                if (this.isWinning(hints)) {
                    view.showMessage("Ура! Победа!", "robot");
                } else {
                    view.showMessage(hints, "robot");                    
                }


            }          
        });

        exit.addEventListener("click", () => {
            location.reload();
        })
    }

    isWinning(hints) {
        const word = "Горячо";

        return hints.every(item => item === word);
    }
    
}

export default Controller;


// public function startGame()
//     {
//         $isFinished = false;
//         $counter = 0;
//         $hints = [];
//         $triesCounter = 0;

//         $username = readline("Ваше имя: ");

//         if (! file_exists('cold-hot.db')) {
//             $model = new Model('cold-hot.db');
//             $model->createTables();
//         } else {
//             $model = new Model('cold-hot.db');
//         }

//         $secretNumber = $this->generateSecretNumber();
//         $gameId = $model->createId();

//         while (!$isFinished) {
//             $userData = readline("Ваше число (или 'exit' для выхода): ");

//             $triesCounter++;

//             $counter = 0;
//             $hints = [];

//             if ($userData === 'exit') {
//                 $model->storeResult($username, $secretNumber, 0);
//                 $model->storeTry($gameId, $triesCounter, $userData, 'Проигрыш');

//                 View::showLose($secretNumber);
//                 die();
//             } elseif (strlen($userData) === strlen($secretNumber)) {
//                 for ($i = 0; $i < strlen($secretNumber); $i++) {
//                     if (mb_strpos($secretNumber, $userData[$i]) !== false) {
//                         if (mb_strpos($secretNumber, $userData[$i]) === $i) {
//                             $hints[] = 'Горячо';
//                         } else {
//                             $hints[] = 'Тепло';
//                         }
//                     } else {
//                         $hints[] = 'Холодно';
//                     }
//                 }

//                 sort($hints);

//                 foreach ($hints as $status) {
//                     if ($status === 'Горячо') {
//                         $counter++;
//                     }
//                 }

//                 if ($counter === 3) {
//                     $isFinished = true;

//                     $model->storeResult($username, $secretNumber, 1);
//                     View::showWin($secretNumber);
//                 }

//                 View::showHints(implode(', ', $hints));

//                 $isFinished ? $model->storeTry($gameId, $triesCounter, $userData, 'Победа') : $model->storeTry($gameId, $triesCounter, $userData, implode(', ', $hints));
//             }
//         }
//     }