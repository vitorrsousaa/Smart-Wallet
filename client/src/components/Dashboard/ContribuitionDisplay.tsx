import { Box, VStack, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { useContribuitions } from "../../contexts/ContribuitionsContext";
import { api } from "../../services/api";

interface ContribuitionDisplayProps {
  title: string;
}

interface dataProps {
  contribuitions: number;
  timeZone: number;
  date: string;
}

export const ContribuitionDisplay = ({ title }: ContribuitionDisplayProps) => {
  const { contribuitionsData } = useContribuitions();

  const wideVersion = useBreakpointValue({
    base: true,
    md: false,
  });

  const optimizedChart = useBreakpointValue({
    xl: 465,
    lg: 610,
    md: 610,
    "2xl": 560,
  });

  return (
    <VStack
      bg="gray.600"
      borderRadius="8px"
      w={["12rem", "22rem", "40rem", "", "31rem", "37rem"]}
      h="300px"
      align="flex-start"
      gap={2}
      p="1rem"
    >
      <Text fontSize="20px">{title}</Text>

      {wideVersion ? (
        <Box align="center" justifyItems="center">
          <Text as="span">Disponível apenas para dispositivos maiores </Text>
        </Box>
      ) : (
        <Box bg="gray.200" color="gray.600" borderRadius="12px" align="center">
          <AreaChart
            data={contribuitionsData}
            margin={{ top: 20, right: 20, left: 45, bottom: 10 }}
            width={optimizedChart}
            height={220}
          >
            <defs>
              <linearGradient id="contribuitions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="60%" stopColor="#EBA417" stopOpacity={1.8} />
                <stop offset="99%" stopColor="#F6AD55 " stopOpacity={0.3} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={false}
              vertical={false}
            />

            <XAxis dataKey="date" tickSize={12} tickMargin={6} />

            <YAxis
              tickSize={4}
              tickFormatter={(value) =>
                new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(value)
              }
            />
            <Tooltip />
            <Area
              type="natural"
              dataKey="contribuitions"
              stroke="#1f2729"
              fill="url(#contribuitions)"
              activeDot={{ stroke: "#EBA417", strokeWidth: 2, r: 4 }}
            />
          </AreaChart>
        </Box>
      )}
    </VStack>
  );
};
