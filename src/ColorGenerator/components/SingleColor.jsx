import { toast } from "react-toastify";

const SingleColor = ({color, index}) => {
  const { hex, weight } = color

  // Function to copy clicked color to Clipboard
  async function saveColorToClipboard() {
    try {
      await navigator.clipboard.writeText(hex)
      toast.success(`${hex} copied to the clipboard!`)
    } catch (error) {
      toast.error('Failed to copy color:', error.message)
    }
  }
  return (
		<article
			className="single-color"
			style={{
				backgroundColor: `#${hex}`,
				color: index > 9 ? '#fff' : '#000',
			}}
      onClick={saveColorToClipboard}
		>
			<p className="color-percent">{weight}%</p>
			<p className="color-hex">{hex}</p>
		</article>
	);
}

export default SingleColor