import React from "react";
import { Axios } from "./axiosClient";

export const getUSDTForBuy = async (
  value: string,
  setState: React.Dispatch<React.SetStateAction<string>>
) => {
  const response = await Axios.get(`/1/${value}/IRT/USDT`)
    .then((response) => response)
    .catch((response) => {
      console.error(response);
      return response;
    });

  if (response.status !== 200) {
    setState("0");
    return;
  }
  setState(String(response.data.data.destinationAmount));
};

export const getRialForBuy = async (
  value: string,
  setState: React.Dispatch<React.SetStateAction<string>>
) => {
  const response = await Axios.get(`/2/${value}/IRT/USDT`)
    .then((response) => response)
    .catch((response) => {
      console.error(response);
      return response;
    });
  if (response.status !== 200) {
    setState("0");
    return;
  }
  setState(String(response.data.data.sourceAmount));
};

export const getUSDTForSell = async (
  value: string,
  setState: React.Dispatch<React.SetStateAction<string>>
) => {
  const response = await Axios.get(`/2/${value}/USDT/IRT`)
    .then((response) => response)
    .catch((response) => {
      console.error(response);
      return response;
    });

  if (response.status !== 200) {
    setState("0");
    return;
  }
  setState(String(response.data.data.sourceAmount));
};

export const getRialForSell = async (
  value: string,
  setState: React.Dispatch<React.SetStateAction<string>>
) => {
  const response = await Axios.get(`/1/${value}/USDT/IRT`)
    .then((response) => response)
    .catch((response) => {
      console.error(response);
      return response;
    });
  if (response.status !== 200) {
    setState("0");
    return;
  }
  setState(String(response.data.data.destinationAmount));
};

export const getUSDTForPM = async (
  value: string,
  setState: React.Dispatch<React.SetStateAction<string>>
) => {
  const response = await Axios.get(`/1/${value}/PM/USDT`)
    .then((response) => response)
    .catch((response) => {
      console.error(response);
      return response;
    });

  if (response.status !== 200) {
    setState("0");
    return;
  }
  setState(String(response.data.data.destinationAmount));
};

export const getPMForUSDT = async (
  value: string,
  setState: React.Dispatch<React.SetStateAction<string>>
) => {
  const response = await Axios.get(`/2/${value}/PM/USDT`)
    .then((response) => response)
    .catch((response) => {
      console.error(response);
      return response;
    });
  if (response.status !== 200) {
    setState("0");
    return;
  }
  setState(String(response.data.data.sourceAmount));
};
