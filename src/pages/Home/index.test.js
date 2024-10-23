// Importation de MemoryRouter pour simuler le routage dans les tests
import { MemoryRouter } from 'react-router-dom'

// Importation des fonctions render et screen de @testing-library/react pour faciliter les tests
import { render, screen } from '@testing-library/react'

// Importation du composant Home à tester
import Home from './'

// Importation du ThemeProvider pour fournir le contexte du thème au composant
import { ThemeProvider } from '../../utils/context'

// Début de la description du groupe de tests pour le composant Home
describe('The Home component', () => {
  // Début du test pour vérifier que le titre s'affiche correctement
  it('should render title', () => {
    // Rendu du composant Home à l'intérieur d'un MemoryRouter et d'un ThemeProvider
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    )

    // Vérification que le titre attendu est présent dans le document
    expect(
      screen.getByRole('heading', { // Recherche d'un élément de type "heading" (titre)
        level: 2, // On recherche spécifiquement un titre de niveau 2 (h2)
        text: 'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents', // Texte exact du titre
      })
    ).toBeTruthy() // Vérifie que l'élément trouvé existe
  })
})

/*****************************************************************************************************
 * 
 * Explication détaillée du code :
Imports :

MemoryRouter : Fournit une simulation de routage pour les tests, permettant de tester des composants qui utilisent react-router sans avoir besoin d'un serveur de routage réel.
render et screen : Fonctions de la bibliothèque @testing-library/react qui facilitent le rendu des composants et l'interrogation du DOM respectivement.
Home : Le composant qui est testé.
ThemeProvider : Fournit le contexte du thème au composant Home, permettant au test d'être fidèle à l'environnement d'exécution du composant.
Structure du test :

describe : Fonction utilisée pour regrouper des tests relatifs à un même composant ou fonctionnalité, ici le composant Home.
it : Fonction qui définit un test spécifique, décrivant ce que le test doit vérifier (dans ce cas, la présence du titre).
Rendu du composant :

Le composant Home est rendu dans un environnement de test utilisant MemoryRouter et ThemeProvider, ce qui permet au composant de fonctionner comme s'il était dans une vraie application.
Vérification du rendu :

screen.getByRole : Utilisé pour rechercher un élément dans le DOM en fonction de son rôle, qui est une méthode recommandée pour tester l'accessibilité.
level: 2 : Indique que l'on recherche un titre de niveau 2 (h2).
text : Indique le texte exact que doit contenir le titre.
toBeTruthy() : Vérifie que l'élément trouvé existe dans le DOM. Si l'élément n'est pas trouvé, le test échoue.
Objectif du test :
Ce test vérifie que le titre principal du composant Home est correctement rendu lorsqu'il est affiché. Cela garantit que la présentation et le contenu de la page d'accueil sont conformes aux attentes. En testant le composant dans un environnement de routage et avec le thème approprié, il s'assure que le composant fonctionne correctement dans le contexte de l'application.
 */