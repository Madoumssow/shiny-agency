// Importation de la fonction render de la bibliothèque @testing-library/react pour rendre des composants dans les tests
import { render as rtlRender } from '@testing-library/react'

// Importation des fournisseurs de contexte pour le thème et le sondage
import { ThemeProvider, SurveyProvider } from '../../utils/context'

// Importation de MemoryRouter de react-router-dom pour simuler la navigation dans les tests
import { MemoryRouter } from 'react-router-dom'

// Définition d'une fonction personnalisée 'render' qui enveloppe un composant avec les contextes et MemoryRouter
export function render(ui, options) {
  // Wrapper est un composant qui enveloppe le composant 'ui' testé avec les fournisseurs nécessaires
  function Wrapper({ children }) {
    return (
      <MemoryRouter {...options}> {/* MemoryRouter simule la navigation sans un vrai navigateur */}
        <ThemeProvider> {/* Fournisseur de thème, permet de tester les composants avec le contexte du thème */}
          <SurveyProvider> {/* Fournisseur du contexte de sondage, pour partager les données du sondage dans les tests */}
            {children} {/* Les composants enfants (ceux que vous testez) sont placés ici */}
          </SurveyProvider>
        </ThemeProvider>
      </MemoryRouter>
    )
  }

  // Utilisation de la fonction render de @testing-library/react, avec le Wrapper comme conteneur des composants
  rtlRender(ui, { wrapper: Wrapper })
}

/***********************************************************************************************
 * Explication détaillée :
Imports :

rtlRender de @testing-library/react : Cette fonction est utilisée pour rendre des composants dans l'environnement de test. Ici, elle est renommée en rtlRender pour éviter des conflits de nom avec la fonction personnalisée render que vous définissez.
ThemeProvider et SurveyProvider : Fournissent les contextes pour le thème et les données du sondage, similaires à ceux utilisés dans votre application principale.
MemoryRouter de react-router-dom : Simule un router pour les tests sans avoir besoin d'un vrai navigateur, permettant de tester les routes.
Fonction render :

La fonction render est une fonction utilitaire que vous définissez pour encapsuler rtlRender. Elle permet de rendre un composant UI (interface utilisateur) dans un environnement de test tout en l'entourant de tout ce qui est nécessaire (contextes et router).
ui : Le composant à tester.
options : Options supplémentaires que vous pouvez passer à MemoryRouter, comme l'historique des routes.
Composant Wrapper :

Le Wrapper est un composant qui encapsule le composant à tester avec des éléments nécessaires à l'exécution correcte du test (par exemple, un router et des contextes).
MemoryRouter : Simule le comportement du navigateur et permet de tester des composants qui dépendent de la navigation (comme les Routes).
Vous pouvez passer des options à MemoryRouter via l'argument options (comme un historique de navigation ou une route initiale).
ThemeProvider et SurveyProvider : Ces contextes sont appliqués autour du composant pour s'assurer qu'il peut accéder à ces fournisseurs de contexte pendant les tests. Par exemple, si votre composant a besoin de lire ou modifier le thème ou les données du sondage, ces contextes sont là pour fournir ces fonctionnalités.
rtlRender(ui, { wrapper: Wrapper }) :

Cette ligne utilise la fonction render fournie par @testing-library/react pour rendre le composant ui avec un Wrapper qui contient tous les éléments nécessaires (router, contextes).
En utilisant { wrapper: Wrapper }, vous injectez le Wrapper comme conteneur autour du composant testé, garantissant ainsi que le composant est correctement enveloppé dans le contexte de test.
Conclusion :
Ce code est une fonction utilitaire qui simplifie le rendu de vos composants lors des tests en s'assurant qu'ils sont correctement encapsulés dans les fournisseurs de contexte (ThemeProvider et SurveyProvider) et un routeur (MemoryRouter). Cela permet de tester des composants dans un environnement similaire à l'application réelle, notamment pour les composants qui dépendent du thème, du sondage ou de la navigation.

 */