import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import THREE, {
    Scene,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
    PerspectiveCamera,
    WebGLRenderer,
} from "three";
import { useEffect } from "react";

// export const getStaticProps: GetStaticProps = async (context) => {
//   // ...
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   // ...
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // ...
// }

let scene: THREE.Scene,
    geometry: THREE.BoxGeometry,
    material: THREE.MeshBasicMaterial,
    mesh: THREE.Mesh,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer,
    canvas: HTMLCanvasElement;
function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}
export default function Home() {
    useEffect(() => {
        canvas = document.getElementById("canvas") as HTMLCanvasElement;

        scene = new Scene();

        geometry = new BoxGeometry(1, 1, 1);
        material = new MeshBasicMaterial({ color: "#fab0b0" });
        mesh = new Mesh(geometry, material);

        camera = new PerspectiveCamera(
            75,
            canvas.width / canvas.height,
            0.1,
            1000
        );
        camera.position.setZ(5);

        scene.add(mesh);
        scene.add(camera);

        renderer = new WebGLRenderer({ canvas });
        renderer.setSize(canvas.width, canvas.height);
        animate();
    }, []);

    return (
        <canvas
            id="canvas"
            width="600"
            height="600"
            style={{ width: "600", height: "600" }}
        ></canvas>
    );
}
