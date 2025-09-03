import { Button } from '../atoms/inputs/Button/Button';

export default function Blog() {
  return (
    <section className="Section">
      <h2 className="Title1">Mira lo más nuevo en nuestro blog</h2>
      <div className="Line"></div>

      <div className="blog1">
        <img src="" alt="Los mejores ejercicios" className="Image4" />
        <div className="Overlay2">
          <h3 className="Title2">LOS MEJORES EJERCICIOS</h3>
          <p className="Subtitle2">Los mejores ejercicios</p>
          <p className="Description2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar, in imperdiet dolor blandit.
            Vestibulum consectetur efficitur neque, at tempus tellus luctus quis. Quisque sit amet consequat ipsum, eu iaculis metus. Etiam
            suscipit dolor vitae est congue, eu vulputate mauris consequat.
          </p>
        </div>
      </div>

      <div className="blog2">
        <img src="" alt="Los mejores ejercicios" className="blogImage2" />
        <div className="Overlay3">
          <h3 className="Title3">LOS MEJORES EJERCICIOS</h3>
          <p className="Subtitle3">Los mejores ejercicios</p>
          <p className="Description3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar, in imperdiet dolor blandit.
            Vestibulum consectetur efficitur neque, at tempus tellus luctus quis. Quisque sit amet consequat ipsum, eu iaculis metus. Etiam
            suscipit dolor vitae est congue, eu vulputate mauris consequat.
          </p>
        </div>
      </div>

      <div className="button1">
        <Button variant="outlined">VER MAS</Button>
      </div>
    </section>
  );
}
