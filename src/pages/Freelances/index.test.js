// Importation de `msw` (Mock Service Worker) pour intercepter les requêtes réseau lors des tests
import { rest } from 'msw'

// Importation d'une extension pour Jest afin d'ajouter des assertions supplémentaires comme `toBeInTheDocument`
import '@testing-library/jest-dom/extend-expect'

// Importation de `setupServer` depuis `msw/node` pour configurer le serveur de mock qui simule les réponses de l'API
import { setupServer } from 'msw/node'

// Importation de fonctions utiles depuis `@testing-library/react` pour interagir avec le DOM lors des tests
import { waitForElementToBeRemoved, screen } from '@testing-library/react'

// Importation de la fonction `render` personnalisée pour encapsuler les composants dans le contexte nécessaire pour les tests
import { render } from '../../utils/test'

// Importation du composant Freelances, qui sera testé
import Freelances from './'

// Données mockées pour les freelances, simulant une réponse d'API
const freelancersMockedData = [
  {
    name: 'Harry Potter', // Nom du freelance
    job: 'Magicien frontend', // Job/titre du freelance
    picture: '', // Image du freelance (ici, vide pour simplifier)
  },
  {
    name: 'Hermione Granger',
    job: 'Magicienne fullstack',
    picture: '',
  },
]

// Configuration du serveur de mock pour intercepter les requêtes réseau et renvoyer des données simulées
const server = setupServer(
  // Interception des requêtes GET à l'URL spécifique et réponse avec des données mockées
  rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
    return res(ctx.json({ freelancersList: freelancersMockedData }))
  })
)

// Avant tous les tests, on démarre le serveur de mock
beforeAll(() => server.listen())

// Après chaque test, on réinitialise les handlers du serveur pour éviter tout effet secondaire
afterEach(() => server.resetHandlers())

// Après tous les tests, on arrête le serveur de mock
afterAll(() => server.close())

// Test : Vérifie que les noms des freelances sont affichés après la disparition du loader
it('Should display freelancers names after loader is removed', async () => {
  // On rend le composant `Freelances` à l'aide de la fonction `render`
  render(<Freelances />)

  // Attente de la suppression de l'élément du loader (qui a un `data-testid` de 'loader')
  await waitForElementToBeRemoved(() => screen.getByTestId('loader'))

  // Vérifie que le nom "Harry Potter" est présent dans le document
  expect(screen.getByText('Harry Potter')).toBeInTheDocument()

  // Vérifie que le nom "Hermione Granger" est également présent
  expect(screen.getByText('Hermione Granger')).toBeInTheDocument()

  // Vérifie que le loader a bien disparu du document
  expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
})

/*******************************************************************************************
 * 
 * Explication détaillée du code :
Mock Service Worker (msw) :

rest.get : Il intercepte les requêtes GET faites à l'URL 'http://localhost:8000/freelances' et répond avec les données mockées définies dans freelancersMockedData. Cela permet de tester le comportement de votre application sans avoir besoin de faire de vraies requêtes réseau.

setupServer : Ce serveur de mock écoute les requêtes réseau pendant les tests et renvoie les données simulées.

Cycle de vie du serveur de mock :

beforeAll() : Avant que les tests ne commencent, le serveur de mock est démarré pour écouter les requêtes.
afterEach() : Après chaque test, les handlers (règles de simulation des requêtes) sont réinitialisés pour éviter des interférences entre les tests.
afterAll() : Une fois que tous les tests sont terminés, le serveur de mock est arrêté.
Test principal :

render(<Freelances />) : Le composant Freelances est rendu dans le test à l'aide de la fonction render, qui inclut automatiquement le contexte requis (comme les thèmes).

waitForElementToBeRemoved : On attend que l'élément du loader (indiqué par data-testid="loader") soit retiré de l'interface utilisateur avant de poursuivre le test. Cela simule l'attente du chargement des données.

expect(screen.getByText('Harry Potter')) et expect(screen.getByText('Hermione Granger')) : On vérifie que les noms des freelances (Harry Potter et Hermione Granger) apparaissent bien dans le document après le chargement des données.

expect(screen.queryByTestId('loader')).not.toBeInTheDocument() : On vérifie que le loader a bien disparu après le chargement des freelances.

Objectif du test :
Le test s'assure que :

Le loader est bien affiché lorsque les données sont en cours de chargement.
Les noms des freelances sont affichés correctement après la disparition du loader.
Le loader disparaît une fois que les données sont chargées et affichées.
Cela garantit que votre application gère correctement les états de chargement et l'affichage des données une fois qu'elles sont disponibles.

 */