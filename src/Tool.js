import {useState} from "react";

const Tool = ({tool}) => {
    const [hover, setHover] = useState(false);

    const toggleHover = () => {
        setHover(!hover)
    }

    return (
        <a onMouseEnter={toggleHover} onMouseLeave={toggleHover} rel="noreferrer noopener" className="tool h-100 p-4 p-md-5" href={tool.link} target={"_blank"} style={
            {...{'backgroundColor': tool.backgroundColor}, ...(hover ? tool.extraCssHover : tool.extraCss)}
        }>
            <div className={"text-center mb-2 mt-2"}>
                <img height={130} width={130} src={tool.logo} alt="Logo du projet"/>
            </div>
            <div>
                <h3 className={"tool-title mb-1"}>{tool.title}</h3>
                <p className={"tool-description mt-2"}>{tool.description}</p>
            </div>
        </a>
    )
}

export default Tool