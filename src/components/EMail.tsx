import { FunctionComponent } from "react";
import styles from "./EMail.module.css";

const EMail: FunctionComponent = () => {
  return (
    <header className={styles.eMail}>
      <img className={styles.logoIcon} loading="eager" alt="" src="/logo.svg" />
      <section className={styles.mainFRAME}>
        <div className={styles.logo}>
          <div className={styles.line} />
          <b className={styles.olNomeDa}>Olá, [nome da pessoa].</b>
          <div className={styles.freepikFloorInject2Parent}>
            <img
              className={styles.freepikFloorInject2Icon}
              alt=""
              src="/freepikfloorinject2.svg"
            />
            <img
              className={styles.freepikPlantInject2Icon}
              alt=""
              src="/freepikplantinject2.svg"
            />
            <div className={styles.backgroundFrame}>
              <img
                className={styles.freepikBackgroundCompleteIcon}
                alt=""
                src="/freepikbackgroundcompleteinject2.svg"
              />
              <img
                className={styles.freepikCharacterInject2Icon}
                alt=""
                src="/freepikcharacterinject2.svg"
              />
              <div className={styles.freepikDeviceInject2Parent}>
                <img
                  className={styles.freepikDeviceInject2Icon}
                  loading="eager"
                  alt=""
                  src="/freepikdeviceinject2.svg"
                />
                <div className={styles.verificar}>Verificar</div>
              </div>
              <img
                className={styles.freepikSpeechBubbleInjectIcon}
                loading="eager"
                alt=""
                src="/freepikspeechbubbleinject2.svg"
              />
            </div>
          </div>
          <div className={styles.forgotPassword}>
            <div className={styles.esqueceuSuaSenha}>Esqueceu sua senha?</div>
            <div className={styles.vocSolicitouAContainer}>
              <p className={styles.vocSolicitouARedefinioD}>
                <span>{`Você solicitou a redefinição da senha para acesso ao `}</span>
                <span className={styles.meuMaterDei}>Meu Mater Dei</span>
                <span className={styles.paraCriarUma}>
                  . Para criar uma nova senha utlize o código abaixo.
                </span>
              </p>
            </div>
          </div>
          <div className={styles.groupFrames}>
            <div className={styles.groupOfRectanglesParent}>
              <div className={styles.groupOfRectangles} />
              <div className={styles.semicolonTriple}>2</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.div}>4</div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.div1}>1</div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.div2}>5</div>
            </div>
          </div>
          <div className={styles.warningEmail}>
            <div className={styles.seNoFoi}>
              Se não foi você que solicitou alteração da senha ou deseja manter
              a atual ignore esta mensagem. Para manter a segurança da sua conta
              não compartilhe este e-mail ou o código de redefinição.
            </div>
            <img
              className={styles.attentionVectorIcon}
              loading="eager"
              alt=""
            />
          </div>
        </div>
      </section>
      <footer className={styles.atenoEste}>
        Atenção: Este é um e-mail automático, por gentileza não responder.
      </footer>
    </header>
  );
};

export default EMail;
