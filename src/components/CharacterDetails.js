function CharacterDetails({ match }) {
  const { id } = match.params;
  return (
    <div className="container">
      The Details 🎨 {id}
    </div>
  )
}

export default CharacterDetails;