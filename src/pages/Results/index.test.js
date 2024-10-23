// Importation du composant Results et des fonctions formatJobList et formatQueryParams
import Results, { formatJobList, formatQueryParams } from './'

// Importation de MSW (Mock Service Worker) pour simuler des requêtes HTTP
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// Importation des utilitaires pour les tests avec Testing Library
import { waitForElementToBeRemoved, screen } from '@testing-library/react'
import { render } from '../../utils/test'

// Début de la suite de tests pour la fonction formatJobList
describe('The formatJobList function', () => {
  // Test pour vérifier que la fonction ajoute une virgule à un mot
  it('should add a comma to a word', () => {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState) // Vérification de l'égalité
  })

  // Test pour vérifier que la fonction n'ajoute pas de virgule au dernier élément de la liste
  it('should not add a comma to the last element of the list', () => {
    const expectedState = 'item3'
    expect(formatJobList('item3', 3, 2)).toEqual(expectedState) // Vérification de l'égalité
  })
})

// Début de la suite de tests pour la fonction formatQueryParams
describe('The formatQueryParams function', () => {
  // Test pour vérifier que le format de paramètre est correct
  it('should use the right format for param', () => {
    const expectedState = 'a1=answer1'
    expect(formatQueryParams({ 1: 'answer1' })).toEqual(expectedState) // Vérification de l'égalité
  })

  // Test pour vérifier que les paramètres sont concaténés avec '&'
  it('should concatenate params with an &', () => {
    const expectedState = 'a1=answer1&a2=answer2'
    expect(formatQueryParams({ 1: 'answer1', 2: 'answer2' })).toEqual(
      expectedState // Vérification de l'égalité
    )
  })
})

// Simulation de données de résultats
const resultsMockedData = [
  {
    title: 'seo',
    description: `Le SEO est en charge du référencement web d'une page`,
  },
  {
    title: 'frontend',
    description: `Le développeur ou la développeuse frontend se charge de l'interface : interactions avec l'utilisateur, style, etc.`,
  },
]

// Configuration du serveur pour intercepter les requêtes HTTP
const server = setupServer(
  rest.get('http://localhost:8000/results', (req, res, ctx) => {
    return res(ctx.json({ resultsData: resultsMockedData })) // Simulation de la réponse de l'API
  })
)

// Activation du serveur avant tous les tests
beforeAll(() => server.listen())
// Réinitialisation des gestionnaires après chaque test
afterEach(() => server.resetHandlers())
// Fermeture du serveur après tous les tests
afterAll(() => server.close())

// Début de la suite de tests pour le composant Results
describe('The Results component', () => {
  // Test pour vérifier que les résultats s'affichent après le chargement des données
  it('should display the results after the data is loaded', async () => {
    render(<Results />) // Rendu du composant Results
    await waitForElementToBeRemoved(() => screen.getByTestId('loader')) // Attente que le loader soit retiré

    // Vérification des titres des emplois affichés
    const jobTitleElements = screen.getAllByTestId('job-title')
    expect(jobTitleElements[0].textContent).toBe('seo') // Vérification du premier titre
    expect(jobTitleElements.length).toBe(2) // Vérification du nombre total de titres

    // Vérification des descriptions des emplois affichées
    const jobDescriptionElements = screen.getAllByTestId('job-description')
    expect(jobDescriptionElements[1].textContent).toBe(
      resultsMockedData[1].description // Vérification de la deuxième description
    )
    expect(jobDescriptionElements.length).toBe(2) // Vérification du nombre total de descriptions
  })
})
/******************************************************************************
 * Explication détaillée du code :
Imports :

Le composant Results et les fonctions formatJobList et formatQueryParams sont importés pour être testés.
msw est utilisé pour simuler des requêtes API, permettant de tester le comportement du composant sans faire de vraies requêtes réseau.
@testing-library/react fournit des utilitaires pour rendre le composant et interagir avec le DOM.
Tests pour formatJobList :

Deux tests sont définis pour vérifier le comportement de la fonction formatJobList :
Le premier test vérifie que la fonction ajoute une virgule à un mot sauf pour le dernier élément de la liste.
Le second test s'assure que la virgule n'est pas ajoutée au dernier élément.
Tests pour formatQueryParams :

Deux tests sont définis pour vérifier le comportement de la fonction formatQueryParams :
Le premier test vérifie que la fonction crée correctement une chaîne de paramètres pour une seule réponse.
Le second test s'assure que plusieurs réponses sont correctement concaténées avec un &.
Mock des données :

Une liste de résultats fictifs (resultsMockedData) est définie pour simuler les données retournées par l'API.
Configuration du serveur :

Un serveur est configuré pour intercepter les requêtes à l'URL spécifiée (http://localhost:8000/results) et retourner les données fictives définies.
Cycles de vie du serveur :

Le serveur est démarré avant tous les tests, réinitialisé après chaque test, et arrêté après tous les tests pour éviter les fuites de mémoire et assurer un environnement de test propre.
Tests pour le composant Results :

Un test est défini pour vérifier que les résultats s'affichent correctement après le chargement des données.
Le composant Results est rendu, et on attend que le loader disparaisse.
Les titres et descriptions des emplois sont vérifiés pour s'assurer qu'ils correspondent aux données simulées.
Objectif des tests :
Les tests visent à garantir que les fonctions utilitaires formatJobList et formatQueryParams fonctionnent comme prévu et que le composant Results affiche les données correctement après les avoir récupérées. L'utilisation de MSW permet d'éviter les appels réseau réels et de s'assurer que les tests sont rapides et fiables.
 */