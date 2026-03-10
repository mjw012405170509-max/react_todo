import { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Sensor = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8888/rasps");
        setSensorData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
    // console.log(sensorData);

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);
  if (sensorData.length === 0) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>
        아직 측정한 데이터가 없습니다.
      </h1>
    );
  }
  const charData = sensorData.map((obj, index) => obj);
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 20 }}>
      <h1 style={{ textAlign: "center", color: "yellowgreen" }}>
        IOT 전력 모니터링하기 ~ ~ ~{" "}
      </h1>
      <div
        style={{
          backgroundColor: "forestgreen",
          borderRadius: 10,
          padding: 20,
          marginBottom: 30,
          border: "1px solid red",
        }}
      >
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={charData}>
            <CartesianGrid strokeDasharray={"3 3"} />
            <Legend />
            {/* <XAxis dataKey={"A"}/> */}
            <Line
              dataKey={"voltage"}
              stroke="red"
              type={"monotone"}
              name="전압(V)"
              dot="false"
            />
            <Line
              dataKey={"power"}
              stroke="yellow"
              type={"monotone"}
              name="파워"
              dot={"false"}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "14px",
          backgroundColor: "greenyellow",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "forestgreen" }}>
            {[
              "전압(VO)",
              "전류(A)",
              "전력(W)",
              "에너지",
              "주파수(Hz)",
              "역률",
              "시간",
            ].map((h) => {
              return (
                <th
                  key={h}
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    color: "white",
                    borderBottom: "2px solid yellowgreen",
                  }}
                >
                  {h}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {/* slice로 자르는 방법은 권장이 아니니 SQL에서 해결 */}
          {sensorData.slice(0, 15).map((item, index) => {
            return (
              <tr
                key={index}
                style={{
                  backgroundColor: "rgb(254,254,254)",
                  borderBottom: "1px soild greenyellow",
                }}
              >
                <td style={{ color: "black", padding: "8px 12px" }}>
                  {item.voltage}
                </td>
                <td style={{ color: "black", padding: "8px 12px" }}>
                  {item.current}
                </td>
                <td style={{ color: "black", padding: "8px 12px" }}>
                  {item.power}
                </td>
                <td style={{ color: "black", padding: "8px 12px" }}>
                  {item.energy}
                </td>
                <td style={{ color: "black", padding: "8px 12px" }}>
                  {item.frequency}
                </td>
                <td style={{ color: "black", padding: "8px 12px" }}>
                  {item.powerFactor}
                </td>
                <td style={{ color: "black", padding: "8px 12px" }}>
                  {item.timeStamp}
                </td>
                {/* 밑에 탄소 배출량 받을 코드 */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Sensor;
