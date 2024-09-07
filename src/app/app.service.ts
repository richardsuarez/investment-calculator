import { Injectable } from "@angular/core";

@Injectable({
     providedIn: 'root'
})
export class AppService {

    data! : {
        year: number,
        interest: number,
        valueEndOfYear: number,
        annualInvestment: number,
        totalInterest: number,
        totalAmountInvested: number,
      }[];

    calculateInvestmentResults(initial: number, duration: number, annual: number, expectedReturn: number) {
        const annualData = [];
        let investmentValue = initial;

        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annual;
            const totalInterest =
                investmentValue - annual * year - initial;
            annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: annual,
                totalInterest: totalInterest,
                totalAmountInvested: initial + annual * year,
            });
        }
        this.data = annualData;
    }
}