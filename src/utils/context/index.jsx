// Importation des hooks React : useState pour gérer l'état local et createContext pour créer des contextes
import React, { useState, createContext } from 'react'

// Création du contexte ThemeContext, qui permettra de partager l'information du thème (clair/sombre) dans l'application
export const ThemeContext = createContext()

// Définition du composant fournisseur de contexte ThemeProvider qui permet d'encapsuler des composants enfants
export const ThemeProvider = ({ children }) => {
  // Initialisation de l'état 'theme' à 'light', représentant le thème actuel (par défaut 'clair')
  const [theme, setTheme] = useState('light')

  // Fonction permettant de basculer entre les thèmes 'light' et 'dark'
  const toggleTheme = () => {
    // Si le thème actuel est 'light', on le change en 'dark' et vice versa
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  // Retourne le fournisseur de contexte, qui partage 'theme' (le thème actuel) et 'toggleTheme' (fonction pour changer de thème)
  // Les composants enfants peuvent accéder à ce contexte via useContext
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Création du contexte SurveyContext, qui stockera et partagera les réponses du questionnaire dans l'application
export const SurveyContext = createContext()

// Définition du composant fournisseur de contexte SurveyProvider pour encapsuler les composants enfants
export const SurveyProvider = ({ children }) => {
  // Initialisation de l'état 'answers' à un objet vide, qui stockera les réponses du questionnaire
  const [answers, setAnswers] = useState({})

  // Fonction qui permet de sauvegarder les réponses du questionnaire
  // Elle fusionne les nouvelles réponses avec les réponses précédentes
  const saveAnswers = (newAnswers) => {
    // On fusionne les nouvelles réponses avec l'état existant 'answers'
    setAnswers({ ...answers, ...newAnswers })
  }

  // Retourne le fournisseur de contexte, qui partage 'answers' (les réponses actuelles) et 'saveAnswers' (fonction pour sauvegarder des réponses)
  // Les composants enfants peuvent accéder à ce contexte via useContext
  return (
    <SurveyContext.Provider value={{ answers, saveAnswers }}>
      {children}
    </SurveyContext.Provider>
  )
}
/*******************************************************************************************
 * Explication détaillée :
ThemeContext et ThemeProvider :

ThemeContext : Il s'agit du contexte créé par createContext(), permettant de partager l'état du thème (clair ou sombre) à travers toute l'application.
ThemeProvider : Ce composant encapsule les enfants et leur fournit l'accès au thème et à la fonction pour basculer entre les thèmes.
theme : État qui représente le thème actuel, initialisé à 'light' (clair).
toggleTheme : Fonction qui permet de basculer entre les thèmes 'light' et 'dark'. Elle met à jour l'état theme.
Le contexte partage à tous ses enfants le thème actuel et la possibilité de le modifier via la fonction toggleTheme.
SurveyContext et SurveyProvider :

SurveyContext : Il s'agit du contexte créé pour stocker les réponses à un questionnaire ou un sondage.
SurveyProvider : Ce composant encapsule les enfants et leur permet de stocker et de récupérer les réponses.
answers : État qui représente les réponses actuelles au questionnaire, initialisé à un objet vide.
saveAnswers : Fonction qui permet de mettre à jour l'état answers. Elle fusionne les nouvelles réponses avec celles qui existent déjà, en utilisant la syntaxe de décomposition { ...answers, ...newAnswers }.
Le contexte partage les réponses actuelles (answers) et la fonction saveAnswers pour que les composants enfants puissent les enregistrer ou les lire.
Conclusion :
Ces deux contextes permettent de partager des états globaux dans l'application :
Le thème (clair/sombre) pour ThemeContext.
Les réponses du questionnaire pour SurveyContext.
Les Provider permettent d'encapsuler les composants enfants et de leur fournir l'accès aux états et fonctions liés à ces contextes, facilitant la gestion d'états globaux dans l'application sans avoir à les passer manuellement à chaque niveau de composant.
 */