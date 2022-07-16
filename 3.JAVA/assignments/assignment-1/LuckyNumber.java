import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class LuckyNumber {
    public static Scanner input = new Scanner(System.in);
    public static int randomMax = 100;
    public static int randomNumber = createRandomNumber(randomMax);
    public static int guessesPerGame = 0;
    public static List<Integer> guessesArr = new ArrayList<Integer>();

    public static void main(String arg[]) {
        // System.out.println("NUM: " + randomNumber); // TEST randomNumber
        System.out.println("Please guess the secret number between 0 end " + randomMax + " !");
        checkNumber();
        checkPlayAgain(input);
        lastPlayInfo();
    }

    // Create a random number
    public static int createRandomNumber(int max) {
        return (int) (Math.random() * (max + 1)); // Add 1 to take last number in rank
    }

    // Take input number
    public static int inputNumber(Scanner input) {
        System.out.print("Your guess: ");
        int inputNumber = input.nextInt();
        return inputNumber;
    }

    // Compare input number
    public static void checkNumber() {
        int inputNumber = inputNumber(input);
        guessesPerGame += 1; // Add 1 each check number
        // Wrong cases
        if (inputNumber != randomNumber) {
            if (inputNumber > randomNumber) {
                System.out.println("Sorry! Your input number is GREATER than the secret number!");
                checkNumber();
            }
            if (inputNumber < randomNumber) {
                System.out.println("Sorry! Your input number is LOWER than the secret number!");
                checkNumber();
            }
        }
        // Matching case
        if (inputNumber == randomNumber) {
            if (guessesPerGame == 1) {
                System.out.println(
                        "CONGRATULATION! You've found out the secret number after " + guessesPerGame + " time.");
            }
            if (guessesPerGame > 1) {
                System.out
                        .println("CONGRATULATION! You've found out the secret number after " + guessesPerGame
                                + " times.");
            }
            guessesArr.add(guessesPerGame); // Adding to ArrList
            guessesPerGame = 0; // Reset when matching
        }
    }

    // Play again comfirmation
    public static void checkPlayAgain(Scanner input) {
        System.out.print("Do you wanna guess another secret number? ");
        String confirm = input.next().toLowerCase();
        if (confirm.matches("y|yes")) {
            randomNumber = createRandomNumber(randomMax);
            // System.out.println("NUM: " + randomNumber); // TEST randomNumber
            checkNumber();
            checkPlayAgain(input);
        }
    }

    // Print out summary
    public static void lastPlayInfo() {
        int totalGames = guessesArr.size(); // number of elements
        int totalGuesses = guessesArr.stream().mapToInt(Integer::intValue).sum(); // sum all elements ListArr
        int bestGuesses = Collections.min(guessesArr); // get min elelemts ListArr
        double averageGuesses = (double) totalGuesses / totalGames;

        System.out.println("Your Summary result:");
        System.out.println("\t- Total games: " + totalGames);
        System.out.println("\t- Total guesses: " + totalGuesses);
        System.out.println("\t- Average guesses per turn: " + String.format("%.2f", averageGuesses)); // 2 decimal only
        System.out.println("\t- The best game (Fewest guesses): " + bestGuesses);
    }
}