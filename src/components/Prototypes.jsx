import { click } from "@testing-library/user-event/dist/click";
import usePrototypes from "../hooks/usePrototypes";
import useActions from "../hooks/useActions";

export default function Prototypes() {
  // hooks
  const prototypes = usePrototypes();
  const { addToOrder, remove, removeAll } = useActions();

  return (
    <main>
      <div className="prototypes">
        {prototypes.map((prototype) => {
          const { id, thumbnail, price, title, desc, pieUrl } = prototype;

          // Function; to Add a product in order
          // - addToOrder is in "hooks" folder.
          const click = () => {
            addToOrder(id);
          };
          return (
            <div className="prototype" key={id}>
              <a href={pieUrl} target="_BLANK" rel="noreferrer">
                <div style={{ padding: "25px 0 33px 0" }}>
                  <video
                    autoPlay
                    loop
                    playsInline
                    className="prototype__artwork prototype__edit"
                    src={thumbnail}
                  />
                </div>
              </a>

              <div className="prototype__body">
                <div className="prototype__title">
                  <div
                    className="btn btn--primary float--right"
                    onClick={click}
                  >
                    <i className="icon icon--plus" />
                  </div>
                  {title}
                </div>
                <p className="prototype__price">${price}.00</p>
                <p className="prototype__desc">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
