// Importation des hooks et des bibliothèques nécessaires
import { useState } from 'react' // Importation de useState pour gérer l'état local
import styled from 'styled-components' // Importation de styled-components pour le style des composants
import colors from '../../utils/style/colors' // Importation d'un module de couleurs

// Création d'un wrapper pour l'input, qui sert de conteneur
const InputWrapper = styled.div`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')}; // Couleur du texte en fonction du thème
  display: flex; // Utilisation de Flexbox pour la mise en page
  flex-direction: column; // Les éléments enfants seront disposés en colonne
`

// Création d'un label stylisé pour l'input
const StyledLabel = styled.label`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')}; // Couleur du label selon le thème
`

// Création d'un input stylisé
const StyledInput = styled.input`
  border: none; // Pas de bordure
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')}; // Couleur du texte de l'input
  background-color: transparent; // Fond transparent
  border-bottom: 1px solid ${({ theme }) => (theme === 'light' ? colors.dark : 'white')}; // Bordure inférieure
  margin-top: 5px; // Marge en haut de l'input
  margin-bottom: 15px; // Marge en bas de l'input
`

// Définition du composant EmailInput qui prend le thème en prop
function EmailInput({ theme }) {
  // Utilisation du hook useState pour gérer l'état de la valeur de l'input
  const [inputValue, setInputValue] = useState('') // Valeur initiale vide pour l'input

  // Rendu du composant
  return (
    <InputWrapper theme={theme}> {/* Wrapper avec le thème passé en prop */}
      <StyledLabel theme={theme}>Adresse email</StyledLabel> {/* Label pour l'input */}
      <StyledInput
        theme={theme} // Application du thème à l'input
        onChange={(e) => setInputValue(e.target.value)} // Met à jour la valeur de l'input à chaque changement
      />
      {inputValue} {/* Affichage de la valeur actuelle de l'input */}
    </InputWrapper>
  )
}

// Exportation du composant pour utilisation dans d'autres fichiers
export default EmailInput
/****************************************************************************************
 * Explication détaillée du code :
Imports :

useState : Importé depuis React pour gérer l'état local dans le composant.
styled : Importé depuis styled-components pour créer des composants stylisés.
colors : Importé depuis un fichier de style utilitaire pour utiliser une palette de couleurs définie.
Styled Components :

InputWrapper : Un composant conteneur qui applique une couleur de texte en fonction du thème et utilise Flexbox pour la mise en page en colonne.
StyledLabel : Un label stylisé pour l'input, dont la couleur dépend du thème.
StyledInput : Un input stylisé avec des propriétés pour le style, y compris la couleur du texte, un fond transparent, et une bordure inférieure.
Composant EmailInput :

Définition : La fonction EmailInput est un composant fonctionnel qui prend une prop theme pour déterminer le style.
État : Utilisation de useState pour créer une variable d'état inputValue, initialisée à une chaîne vide. Cette variable stocke la valeur actuelle de l'input.
Rendu :
Le composant retourne un InputWrapper qui contient :
Un StyledLabel affichant le texte "Adresse email".
Un StyledInput qui met à jour inputValue à chaque fois que l'utilisateur modifie le contenu de l'input (via onChange).
La valeur actuelle de inputValue est affichée sous l'input.
Exportation :

Le composant EmailInput est exporté pour être utilisé dans d'autres parties de l'application.
Objectif du composant :
Le composant EmailInput sert à fournir un champ d'entrée pour une adresse email. Il s'ajuste à différents thèmes (clair et sombre) et affiche la valeur saisie par l'utilisateur sous le champ d'entrée, ce qui peut être utile pour la visualisation immédiate de l'entrée.

 */