/* eslint-disable react/require-default-props */
import { Text, Stack, Grid, TextInput, UnstyledButton, Checkbox, Container } from '@mantine/core';
import React, { useState } from 'react';
import { rollDice } from '../services/dice.service';

interface StatsProps {
  value: number;
  valueAddedBaseValue: number;
  valueDividedBy2: number;
  valueDividedBy5: number;
  isClassTraits: boolean;
}

interface StatsParams {
  label?: string;
  value: number;
  nDices?: number;
  nSides?: number;
  baseValue?: number;
  maxValue: number;
  isClass?: boolean;
}

export function Stats({
  label,
  value,
  nDices,
  nSides,
  baseValue = 0,
  maxValue,
  isClass = false,
}: StatsParams) {
  const [statValues, setStatValues] = useState<StatsProps>({
    value,
    valueAddedBaseValue: Math.min(maxValue, value + baseValue),
    valueDividedBy2: Math.floor(Math.min(maxValue, value + baseValue) / 2),
    valueDividedBy5: Math.floor(Math.min(maxValue, value + baseValue) / 5),
    isClassTraits: false,
  });

  function setStats(stat: number) {
    const valueAddedBaseValue = Math.min(maxValue, stat + baseValue);
    setStatValues({
      value: stat,
      valueAddedBaseValue,
      valueDividedBy2: Math.floor(valueAddedBaseValue / 2),
      valueDividedBy5: Math.floor(valueAddedBaseValue / 5),
      isClassTraits: statValues.isClassTraits,
    });
  }

  function rollStat() {
    if (!nDices || !nSides) return;
    const roll = rollDice(nDices, nSides);
    setStats(roll);
  }

  return (
    <Container>
      <Stack align="center" spacing={0} sx={{ border: '1px solid', borderRadius: '0.5em' }}>
        <Text align="center" fz="sm">
          {label}
        </Text>
        <Grid justify="center" align="center" sx={{ paddingTop: '5px', paddingBottom: '5px' }}>
          {isClass && (
            <Grid.Col span="content">
              <Checkbox
                checked={statValues.isClassTraits}
                size="xs"
                onChange={() => {
                  setStatValues({ ...statValues, isClassTraits: !statValues.isClassTraits });
                }}
              />
            </Grid.Col>
          )}
          <Grid.Col span={5}>
            <TextInput
              value={statValues.value}
              onChange={(event) => {
                const numberedValue = Number(event.currentTarget.value);
                if (Number.isNaN(numberedValue) || numberedValue < 0) return;
                setStats(numberedValue);
              }}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Grid justify="center" align="center">
              <Grid.Col span={6}>
                <Text fz="xl">{statValues.valueAddedBaseValue}</Text>
              </Grid.Col>
              <Grid.Col span={5}>
                <Stack spacing={0} align="center">
                  <Text fz="xs">{statValues.valueDividedBy2}</Text>
                  <Text fz="xs">{statValues.valueDividedBy5}</Text>
                </Stack>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          {nDices && nSides && (
            <Grid.Col span="content">
              <UnstyledButton onClick={() => rollStat()}>
                <img src="/src/assets/dice20.png" alt="roll" width="20px" />
              </UnstyledButton>
            </Grid.Col>
          )}
        </Grid>
      </Stack>
    </Container>
  );
}
