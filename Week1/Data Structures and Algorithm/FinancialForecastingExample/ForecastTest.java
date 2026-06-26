public class ForecastTest {

    public static void main(String[] args) {

        double presentValue = 10000;
        double growthRate = 0.10; // 10%
        int years = 5;

        double future = FinancialForecast.futureValue(presentValue, growthRate, years);

        System.out.printf("Present Value : %.2f%n", presentValue);
        System.out.printf("Growth Rate   : %.0f%%%n", growthRate * 100);
        System.out.println("Years         : " + years);
        System.out.printf("Future Value  : %.2f%n", future);

    }

}