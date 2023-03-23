import "../styles.css";
import { butterflies } from "./data";

const noramlizedBfs = butterflies.reduce(
  (acc, bf) => [
    ...acc,
    {
      scientificName: bf.scientificName,
      family: bf.family,
      continent: bf.continent,
      country: bf.country
    }
  ],
  []
);

const normalizeString = (string) =>
  string
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,/"#!$%^&*;:{}=\-_`~()]/g, "");

export const fetchButterflies = (term) =>
  new Promise((res) => {
    const responseMS = Math.round(Math.random() * 1200 + 200);
    const filteredBfs = noramlizedBfs.filter((bf) =>
      normalizeString(bf.scientificName).includes(normalizeString(term))
    );

    setTimeout(() => res(filteredBfs), responseMS);
  });
