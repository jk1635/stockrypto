import { useEffect, useState } from "react";

const DashBoardPage = () => {
  interface StockData {
    itmsNm: string;
    srtnCd: number;
    mrktCtg: number;
  }

  const [stockData, setStockData] = useState<StockData[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getStockQuote = async () => {
      // setIsLoading(true);
      try {
        const apiUrl = process.env.REACT_APP_API_URL;

        const response = await fetch(`${apiUrl}/stock-data`);
        console.log("response", response);
        console.log("response", response.body);

        setIsLoading(false);
        console.log(stockData);
      } catch (error) {
        console.error("Error fetching stock data:", error);
        setIsLoading(false);
      }
    };

    getStockQuote();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section>
        <h3>투자 평가금</h3>
        <h2>40,309,438원</h2>
      </section>
      <section>
        <h3>주식</h3>
        <ul>
          <li>
            <span>테슬라</span>
            <p>18,458,488원</p>
            <p>4,066,038원(12.89%)</p>
          </li>
          <li>
            <span>알파벳 Class A</span>
            <p>1,786,010 원</p>
            <p>397,600원(28.64%)</p>
          </li>
          <li>
            <span>코카콜라</span>
            <p>2,295,840 원</p>
            <p>33,333원(-1.43%)</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>코인</h3>
        <ul>
          <li>
            <span>비트코인</span>
            <p>15,044,100 원</p>
            <p>6,944,100원(85.72%)</p>
          </li>
          <li>
            <span>이더리움</span>
            <p>2,785,000원</p>
            <p>1,785,000원(178.50%)</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>포트폴리오</h3>
        <ul>
          <li>
            <span>주식(75%)</span>
            <p>2,785,000원</p>
            <p>1,785,000원(178.50%)</p>
          </li>
          <li>
            <span>코인(25%)</span>
            <p>2,785,000원</p>
            <p>1,785,000원(178.50%)</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>요약</h3>
        <ul>
          <li>
            <span>투자 원금</span>
            <p>2,785,000원</p>
          </li>
          <li>
            <span>수익금(률)</span>
            <p>13,226,367원(12.89%)</p>
          </li>
          <li>
            <span>투자 평가금</span>
            <p>40,309,438원</p>
          </li>
        </ul>
      </section>
    </div>
  );
};
export default DashBoardPage;
