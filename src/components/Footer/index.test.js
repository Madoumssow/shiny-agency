// Importation des bibliothèques et des composants nécessaires pour les tests
import Footer from './' // Importation du composant Footer à tester
import { render, screen, fireEvent } from '@testing-library/react' // Importation de fonctions de testing-library pour le rendu et les interactions
import { ThemeProvider } from '../../utils/context' // Importation du contexte ThemeProvider pour fournir le thème

// Début de la suite de tests pour le composant Footer
describe('Footer', () => {
  // Test pour vérifier que le composant se rend sans erreurs
  it('Should render without crashing', async () => {
    render(
      <ThemeProvider> {/* Enveloppement du composant Footer avec le ThemeProvider */}
        <Footer /> {/* Rendu du composant Footer */}
      </ThemeProvider>
    )
  })

  // Test pour vérifier que le bouton change le thème lorsqu'il est cliqué
  it('Should change theme', async () => {
    render(
      <ThemeProvider> {/* Enveloppement du composant Footer avec le ThemeProvider */}
        <Footer /> {/* Rendu du composant Footer */}
      </ThemeProvider>
    )
    const nightModeButton = screen.getByRole('button') // Récupération du bouton dans le DOM
    expect(nightModeButton.textContent).toBe('Changer de mode : ☀️') // Vérification que le texte initial est correct
    fireEvent.click(nightModeButton) // Simuler un clic sur le bouton
    expect(nightModeButton.textContent).toBe('Changer de mode : 🌙') // Vérification que le texte change après le clic
  })
})
/******************************************************************************************
 * Explication détaillée du code :
Imports :

Footer : Importation du composant Footer qui sera testé.
render, screen, fireEvent : Importation de fonctions de la bibliothèque @testing-library/react qui facilitent le rendu des composants, l'accès aux éléments dans le DOM et la simulation d'événements utilisateur.
ThemeProvider : Importation du composant ThemeProvider, qui fournit le contexte du thème (clair ou sombre) au composant Footer pendant le test.
Début de la suite de tests :

describe('Footer', () => {...}) : Cette fonction regroupe plusieurs tests liés au composant Footer. Le premier argument est le nom du groupe de tests, et le second est une fonction qui contient les tests.
Premier test : Vérification du rendu :

it('Should render without crashing', async () => {...}) : Cette fonction définit un test qui vérifie si le composant Footer se rend sans provoquer d'erreurs.
render(...) : Le composant Footer est rendu à l'intérieur du ThemeProvider, ce qui lui permet d'accéder au contexte du thème.
Si le rendu se déroule sans problème, le test passe.
Deuxième test : Vérification du changement de thème :

it('Should change theme', async () => {...}) : Ce test vérifie que le bouton de changement de thème fonctionne correctement.
render(...) : Comme précédemment, le composant Footer est rendu à l'intérieur du ThemeProvider.
const nightModeButton = screen.getByRole('button') : Récupère le bouton à partir du DOM en utilisant son rôle. Cela permet de s'assurer que l'on interagit avec le bon élément.
expect(nightModeButton.textContent).toBe('Changer de mode : ☀️') : Vérifie que le texte du bouton est correct avant l'interaction, indiquant que le thème actuel est clair.
fireEvent.click(nightModeButton) : Simule un clic sur le bouton.
expect(nightModeButton.textContent).toBe('Changer de mode : 🌙') : Après le clic, vérifie que le texte du bouton a changé, ce qui indique que le thème a été modifié avec succès.
Objectif des tests :
Les tests visent à s'assurer que le composant Footer se rend correctement et que le bouton permettant de changer le thème fonctionne comme prévu. Cela garantit que l'interaction utilisateur est bien gérée et que l'interface utilisateur réagit correctement aux actions de l'utilisateur.
 */