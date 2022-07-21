
// 7.15: collapse
import java.util.ArrayList;
import java.util.Arrays;

public class lab {
    public static void main(String[] args) {
        int[] arr = { 7, 2, 8, 9, 4, 13, 7, 1, 9, 10 };
        // int[] arr = { 1, 2, 3, 4, 5 };
        System.out.println(Arrays.toString(collapse(arr)));
    }

    public static int[] collapse(int[] arr) {
        ArrayList<Integer> arrList = new ArrayList<Integer>();
        for (int i = 0; i < arr.length / 2; i++) {
            arrList.add(arr[i * 2] + arr[i * 2 + 1]);
        }
        if (arr.length % 2 == 1) {
            arrList.add(arr.length);
        }
        return arrList.stream().mapToInt(i -> i).toArray();
    }
}