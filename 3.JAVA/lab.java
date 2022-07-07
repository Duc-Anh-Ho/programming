
// 4.15: getGrade
import java.util.Scanner;

public class lab {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Score: ");
        int score = input.nextInt();
        System.out.println("Grade: " + getGrade(score));
        input.close();
    }

    public static double getGrade(int score) {
        double grade = 0.8;
        if (score < 0 || score > 100) {
            throw new IllegalArgumentException();
        }
        if (score < 60) {
            grade = 0.0;
        } else if (score <= 62) {
            grade = 0.7;
        } else if (score >= 95) {
            grade = 4.0;
        } else {
            for (int i = 63; i < score; i++) {
                grade += 0.1;
            }
        }
        return grade;
    }
}