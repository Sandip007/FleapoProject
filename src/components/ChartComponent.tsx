import React from 'react';
import { View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const ChartComponent = () => {
    return (
        <View style={{width: '100%'}}>
            <LineChart
                data={{
                    labels: ["Start", "Mid", "End"],
                    datasets: [
                        {
                            data: [5.3, 7.2, 9.8],
                            strokeWidth: 2,
                        },
                    ],
                }}
                width={screenWidth}
                height={220}
                yAxisLabel=""
                yAxisSuffix=""
                chartConfig={{
                    backgroundGradientFrom: "#222",
                    backgroundGradientTo: "#222",
                    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    strokeWidth: 2,
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 1,
                }}
            />
            <View
                style={{
                    position: "absolute",
                    top: 50,
                    left: screenWidth / 2.2,
                    backgroundColor: "black",
                    borderRadius: 20,
                    padding: 5,
                }}
            >
                <Text style={{ color: "white", fontWeight: "bold" }}>2.3k</Text>
            </View>
        </View>
    );
};

export default ChartComponent;
