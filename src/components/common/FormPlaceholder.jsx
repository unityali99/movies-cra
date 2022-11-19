import { TextBlock, RectShape } from "react-placeholder/lib/placeholders";

const awesomePlaceholder = (
  <div className="my-awesome-placeholder my-3 w-50 mx-auto text-center">
    <RectShape
      className="mx-auto my-2"
      color="yellow"
      style={{ width: 100, height: 20 }}
    />
    <TextBlock rows={4} color="orange" />
    <RectShape
      className="mx-auto my-2"
      color="yellow"
      style={{ width: 100, height: 20 }}
    />
    <TextBlock rows={4} color="orange" />
    <RectShape
      className="mx-auto my-2"
      color="yellow"
      style={{ width: 100, height: 20 }}
    />
  </div>
);

export default awesomePlaceholder;
