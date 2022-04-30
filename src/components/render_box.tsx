import 'renderer/render_box.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const renderBox = () => {
  return (
    <div className="input-group" id="render_box">
      <h6>Render Views</h6>
      <label htmlFor="Angle1">
        Angle 1
        <input type="checkbox" id="Angle1" name="Angle1" />
      </label>
      <br />
      <label htmlFor="Angle2">
        Angle 2
        <input type="checkbox" id="Angle2" name="Angle2" />
      </label>
      <br />
      <label htmlFor="Angle3">
        Angle 3
        <input type="checkbox" id="Angle3" name="Angle3" />
      </label>
      <br />
      <label htmlFor="Angle4">
        Angle 4
        <input type="checkbox" id="Angle4" name="Angle4" />
      </label>
      <br />
      <span>
        <button className="btn btn-default" type="button" id="render_button">
          Render
        </button>
      </span>
    </div>
  );
};

export default renderBox;
