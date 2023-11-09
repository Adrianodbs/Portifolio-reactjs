export default function Stack({ img, title }) {
  return (
    <div>
      <img src={img} alt={title} />
      <span>{title}</span>
    </div>
  )
}
