
// 7.18: matrixAdd 
import java.util.Arrays;

public class lab {
    public static void main(String[] args) {
        // int arr1[][] = { { 1, 2, 3, 4, 5 }, { 1, 1, 2, 3, 4 } };
        // int arr2[][] = { { 3, 2, 6, 4, 5 }, { 1, 1, 2, 3, 4 } };
        int arr1[][] = {};
        int arr2[][] = {};
        System.out.println(arr1.length);
        System.out.println(Arrays.deepToString(matrixAdd(arr1, arr2)));

    }

    public static int[][] matrixAdd(int arr1[][], int arr2[][]) {
        int[][] arr = {};
        if (arr1.length == 0) {
            return arr;
        }
        arr = new int[2][arr1[0].length];
        for (int i = 0; i < arr1[0].length; i++) {
            arr[0][i] = arr1[0][i] + arr2[0][i];
            arr[1][i] = arr1[1][i] + arr2[1][i];
        }
        return arr;
    }

}