// Importation du composant Card à tester
import Card from './'

// Importation des utilitaires de test de la bibliothèque Testing Library
import { render, screen, fireEvent } from '@testing-library/react'

// Importation du fournisseur de thème pour le contexte
import { ThemeProvider } from '../../utils/context'

// Début de la suite de tests pour le composant Card
describe('Card', () => {
  
  // Test pour vérifier que le titre et l'image sont correctement rendus
  it('Should render title and image', async () => {
    // Rendu du composant Card avec le ThemeProvider
    render(
      <ThemeProvider>
        <Card
          title="Harry Potter" // Titre de la carte
          label="Magicien frontend" // Label de la carte
          picture="/myPicture.png" // Chemin de l'image
        />
      </ThemeProvider>
    )
    
    // Récupération de l'image de la carte à l'aide de son rôle
    const cardPicture = screen.getByRole('img')
    // Récupération du titre de la carte à l'aide d'une expression régulière
    const cardTitle = screen.getByText(/Harry/i)
    
    // Vérification que l'URL de l'image est correcte
    expect(cardPicture.src).toBe('http://localhost/myPicture.png')
    // Vérification que le texte du titre est correct
    expect(cardTitle.textContent).toBe(' Harry Potter ')
  })

  // Test pour vérifier l'ajout d'une étoile autour du titre lors du clic
  it('Should add ⭐️ around title', async () => {
    // Rendu du composant Card avec le ThemeProvider
    render(
      <ThemeProvider>
        <Card
          title="Harry Potter" // Titre de la carte
          label="Magicien frontend" // Label de la carte
          picture="/myPicture.png" // Chemin de l'image
        />
      </ThemeProvider>
    )
    
    // Récupération du titre de la carte
    const cardTitle = screen.getByText(/Harry/i)
    // Récupération du parent de l'élément titre (le div contenant)
    const parentNode = cardTitle.closest('div')
    
    // Simuler un clic sur le parent, ce qui déclenche l'ajout d'une étoile
    fireEvent.click(parentNode)
    
    // Vérification que le titre inclut des étoiles de part et d'autre
    expect(cardTitle.textContent).toBe('⭐️ Harry Potter ⭐️')
  })
})
/***********************************************************************************************
 * 
 * Explication détaillée du code :
Imports :

Composant Card : Le composant à tester est importé.
Utilitaires de test : render, screen, et fireEvent sont importés depuis @testing-library/react, fournissant les outils nécessaires pour rendre le composant et interagir avec lui.
ThemeProvider : Importé pour fournir le contexte de thème au composant lors des tests.
Début de la suite de tests :

describe('Card', () => { ... }) : Crée une suite de tests pour le composant Card.
Premier test : Rendu du titre et de l'image :

it('Should render title and image', async () => { ... }) : Décrit un test pour vérifier que le titre et l'image sont correctement affichés.
render(...) : Rendu du composant Card dans un environnement de test, enveloppé par ThemeProvider pour le thème.
screen.getByRole('img') : Utilisé pour récupérer l'élément image du composant en fonction de son rôle (rôle d'image).
screen.getByText(/Harry/i) : Récupère le titre en utilisant une expression régulière pour ignorer la casse.
expect(...) : Utilisé pour faire des assertions sur le rendu :
Vérifie que l'URL de l'image est correcte (en tenant compte du contexte local).
Vérifie que le texte du titre est exactement "Harry Potter".
Deuxième test : Ajout d'étoiles autour du titre :

it('Should add ⭐️ around title', async () => { ... }) : Un test pour vérifier que des étoiles sont ajoutées autour du titre lorsqu'on clique dessus.
render(...) : De nouveau, le composant est rendu avec le ThemeProvider.
const cardTitle = screen.getByText(/Harry/i) : Récupère le titre de la carte.
const parentNode = cardTitle.closest('div') : Récupère l'élément parent (le div qui enveloppe le titre) pour simuler un clic.
fireEvent.click(parentNode) : Simule un clic sur le parent, déclenchant le changement d'état du composant pour ajouter des étoiles autour du titre.
expect(...) : Vérifie que le texte du titre inclut maintenant des étoiles de part et d'autre ("⭐️ Harry Potter ⭐️").
Objectif des tests :
Les tests visent à garantir que le composant Card fonctionne comme prévu, en s'assurant que le titre et l'image s'affichent correctement et que l'interaction utilisateur (clic) modifie l'état du composant de manière appropriée. Ces tests permettent d'identifier les régressions et de maintenir la qualité du code au fur et à mesure des modifications.

 */