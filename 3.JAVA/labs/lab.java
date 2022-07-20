
// 7.8: median
import java.util.Arrays;

public class lab {
    public static void main(String[] args) {
        int[] arr = { 74, 85, 102, 99, 101, 56, 84 };
        System.out.println(median(2, arr));
    }

    public static int median(int numOrder, int[] arr) {
        Arrays.sort(arr);   
        return arr[arr.length - numOrder - 1] ;
    }
}