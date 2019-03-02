import { styled } from "styletron-react";

const Wrapper = styled("div", {
  marginTop: "2em",
  maxWidth: "12em",
  "@media screen and (min-width: 880px)": {
    marginTop: "0.23em",
    maxWidth: "20em"
  }
});

const Logo = () => (
  <Wrapper>
    <svg viewBox="0 0 376 76" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <g transform="translate(0 1)">
          <polygon
            points="30.728 70 0.16762 52.5 30.728 35 61.289 52.5"
            fill="#FF0006"
            fillOpacity="0.078"
          />
          <polygon
            points="0.16762 46.136 30.728 28.636 61.289 46.136 30.728 63.636"
            fill="#FF0006"
            fillOpacity="0.078"
          />
          <polygon
            points="0.16762 39.773 5.7242 42.955 5.7242 49.318 30.728 63.636 61.289 46.136 61.289 52.5 30.728 70 0.16762 52.5 0.16762 46.136"
            fill="#FF0006"
            fillOpacity="0.588"
          />
          <polygon
            points="61.289 52.5 61.289 46.136 30.728 28.636 30.728 35"
            fill="#FF0006"
            fillOpacity="0.588"
          />
          <polygon
            points="0.16762 46.136 5.7242 42.955 11.281 46.136 11.281 39.773 5.7242 36.591 0.16762 39.773"
            fill="#FF0006"
            fillOpacity="0.078"
          />
          <polygon
            points="5.7242 49.318 11.281 46.136 11.281 39.773 5.7242 36.591 0.16762 39.773 5.7242 42.955"
            fill="#FF0006"
            fillOpacity="0.078"
          />
          <path
            d="m0.16762 46.136l5.5566-3.1818"
            fill="#FF0006"
            fillOpacity="0.078"
          />
          <polygon
            points="30.728 28.636 0.16762 46.136 0.16762 52.5 30.728 35"
            fill="#FF0006"
            fillOpacity="0.098"
          />
          <polygon
            points="0.16762 23.864 0.16762 17.5 30.728 0 61.289 17.5 61.289 30.227 55.733 27.045 55.733 20.682 30.728 6.3636"
            fill="#005AFF"
            fillOpacity="0.596"
          />
          <polygon
            points="0.16762 0 30.728 17.5 30.728 23.864 0.16762 6.3636"
            transform="translate(0 17.5)"
            fill="#005AFF"
            fillOpacity="0.706"
          />
          <polygon
            points="0.16762 17.5 30.728 35 61.289 17.5 30.728 0"
            fill="#005AFF"
            fillOpacity="0.082"
          />
          <polygon
            points="61.289 23.864 30.728 6.3636 0.16762 23.864 30.728 41.364"
            fill="#005AFF"
            fillOpacity="0.082"
          />
          <polygon
            points="5.6069 6.3636 0.050326 3.1818 5.6069 0 11.163 3.1818"
            transform="translate(50.126 27.045)"
            fill="#005AFF"
            fillOpacity="0.078"
          />
          <polygon
            points="5.6069 6.3636 0.050326 9.5455 0.050326 3.1818 5.6069 0"
            transform="translate(50.126 20.682)"
            fill="#005AFF"
            fillOpacity="0.078"
          />
          <polygon
            points="5.6069 9.5455 5.6069 3.1818 0.050326 0 0.050326 6.3636"
            transform="translate(50.126 23.864)"
            fill="#005AFF"
            fillOpacity="0.078"
          />
          <polygon
            points="0.19329 9.5455 5.7498 6.3636 5.7498 0 0.19329 3.1818"
            transform="translate(55.54 23.864)"
            fill="#005AFF"
            fillOpacity="0.08"
          />
          <polygon
            points="0.051329 23.864 30.612 6.3636 30.612 0 0.051329 17.5"
            transform="translate(30.677 17.5)"
            fill="#005AFF"
            fillOpacity="0.102"
          />
        </g>
        <path
          d="m115.84 48.407c0-5.002-4.2656-8.4043-12.797-10.207-5.1289-1.0918-8.6963-2.4946-10.702-4.2085-2.0059-1.7139-3.0088-4.0688-3.0088-7.0649 0-3.0215 1.2759-5.5098 3.8276-7.4648 2.5518-1.9551 5.8716-2.9326 9.9595-2.9326 4.4434 0 8.0107 1.06 10.702 3.1802 2.6914 2.1201 4.0371 4.9829 4.0371 8.5884h-2.0947c0-2.7676-1.168-5.0781-3.5039-6.9316s-5.3828-2.7803-9.1406-2.7803c-3.6055 0-6.4619 0.7871-8.5693 2.3613-2.1074 1.5742-3.1611 3.542-3.1611 5.9033 0 1.8535 0.39355 3.3071 1.1807 4.3608s2.0693 2.0059 3.8467 2.8564 4.3672 1.6694 7.7695 2.4565c3.4024 0.78711 6.0937 1.7139 8.0742 2.7803 1.9805 1.0664 3.415 2.3296 4.3037 3.7896 0.88868 1.46 1.333 3.2436 1.333 5.3511 0 3.25-1.333 5.8652-3.999 7.8457-2.666 1.9805-6.1572 2.9707-10.474 2.9707-4.6211 0-8.3472-1.0474-11.178-3.1421-2.8311-2.0947-4.2466-4.7925-4.2466-8.0933h2.0566c0.20313 2.8945 1.479 5.1479 3.8276 6.7603 2.3486 1.6123 5.5288 2.4185 9.5405 2.4185 3.6817 0 6.6714-0.85692 8.9692-2.5708 2.2979-1.7139 3.4468-3.7895 3.4468-6.2271zm18.015-42.237v11.121h9.3691v2.0947h-9.3691v29.25c0 2.9199 0.47607 5.0781 1.4282 6.4746 0.95215 1.3965 2.5454 2.0947 4.7798 2.0947 1.1172 0 2.4756-0.11426 4.0752-0.34277l0.34277 1.9424c-0.8379 0.30469-2.2724 0.45703-4.3037 0.45703-2.9961 0-5.1416-0.83153-6.4365-2.4946-1.2949-1.6631-1.9551-4.2846-1.9805-7.8647v-29.517h-7.6172v-2.0947h7.6172v-11.121h2.0947zm32.678 49.131l0.2666-0.76172 14.244-37.248h2.2852l-18.434 48.369-0.91406 2.2852c-1.9805 4.7989-5.2558 7.1982-9.8262 7.1982-1.4727 0-2.4883-0.13965-3.0469-0.41895l-0.038086-1.9424c0.8125 0.22852 1.7393 0.34277 2.7803 0.34277 2.1582 0 3.9482-0.62841 5.3701-1.8853s2.6533-3.3071 3.6943-6.1509l2.5137-6.8174-16.415-40.98h2.2471l15.272 38.01zm27.193 3.1992h-2.0566v-58.5h2.0566v58.5zm28.336 0.76172c-3.3262 0-6.3794-0.89501-9.1597-2.6851-2.7803-1.79-4.9575-4.2466-6.5317-7.3696-1.5742-3.1231-2.3613-6.5888-2.3613-10.397v-1.7139c0-3.8086 0.76171-7.2998 2.2852-10.474s3.6182-5.6494 6.2842-7.4268 5.5732-2.666 8.7217-2.666c4.5957 0 8.3535 1.6377 11.273 4.9131 2.9199 3.2754 4.3799 7.5791 4.3799 12.911v2.1709h-30.888v2.2471c0 3.3516 0.70458 6.4556 2.1138 9.312s3.3516 5.0972 5.8271 6.7222c2.4756 1.625 5.1606 2.4375 8.0552 2.4375 2.7676 0 5.1225-0.46337 7.0649-1.3901 1.9424-0.92676 3.6626-2.355 5.1606-4.2847l1.4473 1.0283c-3.0723 4.4434-7.6299 6.665-13.673 6.665zm-0.76172-40.676c-4.0117 0-7.414 1.4917-10.207 4.4751-2.793 2.9834-4.4307 6.7856-4.9131 11.407h28.717v-0.49512c0-2.793-0.59033-5.3891-1.771-7.7886-1.1807-2.3994-2.8057-4.2656-4.875-5.5986s-4.3862-1.9995-6.9507-1.9995zm29.859-12.416v11.121h9.3691v2.0947h-9.3691v29.25c0 2.9199 0.47607 5.0781 1.4282 6.4746 0.95215 1.3965 2.5454 2.0947 4.7798 2.0947 1.1172 0 2.4756-0.11426 4.0752-0.34277l0.34277 1.9424c-0.8379 0.30469-2.2725 0.45703-4.3037 0.45703-2.9961 0-5.1416-0.83153-6.4365-2.4946-1.2949-1.6631-1.9551-4.2846-1.9805-7.8647v-29.517h-7.6172v-2.0947h7.6172v-11.121h2.0947zm38.238 12.606l-2.666-0.22852c-3.5039 0-6.4365 1.1362-8.7979 3.4087s-3.9102 5.4526-4.6465 9.5405v27.003h-2.0566v-41.209h2.0566v8.5693c1.1172-2.8692 2.793-5.1416 5.0273-6.8174 2.2344-1.6758 5.04-2.5137 8.417-2.5137 1.1934 0 2.1582 0.13965 2.8945 0.41895l-0.22852 1.8281zm4.0371 18.319c0-3.9356 0.75536-7.4712 2.2661-10.607 1.5108-3.1358 3.6435-5.5796 6.3984-7.3315 2.7549-1.752 5.8716-2.6279 9.3501-2.6279 3.4531 0 6.5508 0.85058 9.293 2.5518s4.8813 4.1133 6.4175 7.2363c1.5361 3.1231 2.3169 6.6396 2.3423 10.55v1.8281c0 3.961-0.74902 7.5029-2.2471 10.626-1.4981 3.1231-3.6245 5.5605-6.3794 7.3125-2.7549 1.752-5.8716 2.6279-9.3501 2.6279s-6.5952-0.86327-9.3501-2.5898c-2.7549-1.7266-4.894-4.145-6.4175-7.2554s-2.2979-6.6079-2.3232-10.493v-1.8281zm2.0566 1.5996c0 3.4278 0.67919 6.5698 2.0376 9.4263s3.25 5.0845 5.6748 6.6841c2.4248 1.5996 5.1987 2.3994 8.3218 2.3994 4.6973 0 8.5249-1.7646 11.483-5.2939 2.958-3.5293 4.437-8.0742 4.437-13.635v-1.1807c0-3.377-0.68554-6.5-2.0566-9.3691-1.3711-2.8692-3.269-5.1099-5.6938-6.7222-2.4248-1.6123-5.1733-2.4185-8.2456-2.4185-4.6973 0-8.5312 1.79-11.502 5.3701s-4.4561 8.0869-4.4561 13.521v1.2188zm46.046-11.807c1.3457-3.1992 3.3262-5.7256 5.9414-7.5791 2.6152-1.8535 5.5098-2.7803 8.6836-2.7803 4.418 0 7.6997 1.2505 9.8452 3.7515 2.1455 2.501 3.231 6.2778 3.2563 11.331v26.889h-2.0566v-26.965c-0.025391-4.418-0.92675-7.687-2.7041-9.8071-1.7774-2.1201-4.5957-3.1802-8.4551-3.1802-3.5547 0-6.6333 1.2632-9.2358 3.7896-2.6026 2.5264-4.3608 5.7827-5.2749 9.769v26.394h-2.0566v-41.209h2.0566v9.5977z"
          fill="#000"
        />
      </g>
    </svg>
  </Wrapper>
);

export default Logo;
