import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Importation des différentes pages de l'application
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
// Importation des composants communs
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
// Importation du style global
import GlobalStyle from './utils/style/GlobalStyle'
// Importation des contextes personnalisés (ThemeProvider et SurveyProvider)
import { ThemeProvider, SurveyProvider } from './utils/context'

// La fonction ReactDOM.render est utilisée pour monter l'application dans le DOM
ReactDOM.render(
  <React.StrictMode>  {/* React.StrictMode permet de détecter les problèmes potentiels en mode développement */}
    <Router> {/* Router permet de gérer la navigation au sein de l'application */}
      <ThemeProvider> {/* Fournit un contexte de thème à tous les composants enfants */}
        <SurveyProvider> {/* Fournit un contexte pour la gestion des données du sondage */}
          <GlobalStyle /> {/* Applique des styles globaux à toute l'application */}
          <Header /> {/* Le composant Header est rendu en haut de chaque page */}
          
          {/* Routes gère le routing entre les différentes pages */}
          <Routes>
            {/* Route pour la page d'accueil */}
            <Route path="/" element={<Home />} />
            
            {/* Route pour la page du sondage avec un paramètre questionNumber */}
            <Route path="/survey/:questionNumber" element={<Survey />} />
            
            {/* Route pour la page des résultats */}
            <Route path="/results" element={<Results />} />
            
            {/* Route pour la page des freelances */}
            <Route path="/freelances" element={<Freelances />} />
            
            {/* Route "catch-all" pour gérer toutes les autres URL (erreurs 404) */}
            <Route path="*" element={<Error />} />
          </Routes>
        </SurveyProvider> {/* Fin du SurveyProvider */}
        
        {/* Footer est rendu en bas de chaque page */}
        <Footer />
      </ThemeProvider> {/* Fin du ThemeProvider */}
    </Router> {/* Fin du Router */}
  </React.StrictMode>, 
  document.getElementById('root') // Montre l'application dans l'élément HTML avec l'ID 'root'
)

/***************************************************************************************** 
Explication détaillée :
Imports :

React : Importé pour créer les composants React.
ReactDOM : Utilisé pour monter l'application dans le DOM.
BrowserRouter (renommé en Router) : Utilisé pour gérer la navigation via le navigateur avec react-router-dom.
Pages (Home, Survey, Results, Freelances) : Pages principales de l'application, chacune étant rendue en fonction de la route.
Header et Footer : Composants communs rendus sur chaque page, respectivement en haut et en bas.
Error : Composant affiché pour toute route non définie (page 404).
GlobalStyle : Applique des styles globaux à toute l'application.
ThemeProvider et SurveyProvider : Fournisseurs de contexte pour le thème et les données du sondage, respectivement.
ReactDOM.render :

Cette méthode monte l'application dans le DOM à l'intérieur de l'élément avec l'ID root.
Tout le contenu est encapsulé dans un React.StrictMode, qui aide à identifier les problèmes potentiels pendant le développement.
Router :

Le composant Router permet à l'application de gérer les différentes URL et de définir quelle page afficher selon l'URL visitée.
ThemeProvider et SurveyProvider :

ThemeProvider : Fournit le thème (couleurs, styles, etc.) à l'application, probablement pour gérer un thème clair/sombre.
SurveyProvider : Gère les données ou l'état du sondage dans toute l'application.
GlobalStyle :

Applique un style global à l'application, défini dans un fichier CSS ou styled-components.
Routes :

Route path="/" : Affiche la page Home pour la route d'accueil ( / ).
Route path="/survey/:questionNumber" : Affiche la page Survey avec un paramètre dynamique questionNumber, qui peut être un numéro de question.
Route path="/results" : Affiche la page des résultats.
Route path="/freelances" : Affiche une page avec une liste de freelances.
Route path="*" : Une route "catch-all" qui attrape toutes les URL non définies et affiche la page d'erreur (Error).
Header et Footer :

Les composants Header (en haut) et Footer (en bas) sont affichés sur chaque page indépendamment de la route actuelle.
Conclusion :
Ce code structure bien une application React avec un système de routes géré par react-router-dom. Il intègre également une gestion de thème via un contexte (ThemeProvider) et un état de sondage partagé (SurveyProvider). Le code applique des styles globaux et inclut des composants communs (header et footer) sur toutes les pages.







*/