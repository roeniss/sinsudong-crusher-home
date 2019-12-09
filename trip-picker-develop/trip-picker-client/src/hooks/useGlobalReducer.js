import { useReducer } from "react";
import { Map } from "immutable";

const dummyItems = [
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gingerbread_House_Essex_CT.jpg/220px-Gingerbread_House_Essex_CT.jpg",
    location: "서울시 마포구 신수동 정하상관 1032호",
    title: "타이틀2222222222",
    number: "1",
    desc:
      "미국의 국도(US 하이웨이) 제66호선. 일리노이주 시카고와 캘리포니아주 로 스앤젤레스를 잇는 총연장 3,940km의 일반국도였다. 애리조나를 관통하여 시카고, LA, 라스베가스 등 주요 도시를 잇는 서부의 축선 중 하나였다.특히 이 도로는 Mother Road라고도 부를 정도로 미국인들에게는 촌동네 향수 비슷한 문화코드로 자리매김하고 있는데, 관련해서 냇 킹 콜의 노래 'Route 66'가 유명하다. 이 노래는 리듬 앤 블루스의 명곡이라 엘비스 프레슬 리 등 많은 가수가 커버하였다. 심지어 미국을 밟아본 적도, 저 도로를 들어본 적도 없는 한국인들이 맥주 파는 펍이나 재즈바에서 저 Route 66 간판은 소 품으로 봐서 익숙할 정도. #영문 위키피디아의 노래 설명 이러한 문화적 이유로 인해 2000년대 들어 국도 전 구간이 복원되었다. 복원 되었다는 말에서 보듯 원래는 44번 고속도로(인터스테이트 하이웨이)가 개통 된 후 구간구간이 뚝뚝 끊기고 전체적으로 교통량이 줄어 결국 1985년 6월 26일부로 국도지정 해제되었었다. 게다가 이 44번 인터스테이트 하이웨이는 미국 최초의 고속도로이기도 하다. 그러나 한 시대의 문화적 아이콘이 사람 들에게 주는 정서적 영감은 대단한 것이어서, 2003년에는 전 구간 복원이 완 료되어 주로 관광객이나 옛 추억을 떠올리려는 미국인들이 여전히 이 도로를 이용하고 있다. 이런 사정을 담은 영상물이 바로 디즈니의 카(애니메이션)."
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gingerbread_House_Essex_CT.jpg/220px-Gingerbread_House_Essex_CT.jpg",
    location: "서울시 마포구 신수동 정하상관 1032호",
    title: "타이틀2222222222",
    number: "2",
    desc:
      "미국의 국도(US 하이웨이) 제66호선. 일리노이주 시카고와 캘리포니아주 로 스앤젤레스를 잇는 총연장 3,940km의 일반국도였다. 애리조나를 관통하여 시카고, LA, 라스베가스 등 주요 도시를 잇는 서부의 축선 중 하나였다.특히 이 도로는 Mother Road라고도 부를 정도로 미국인들에게는 촌동네 향수 비슷한 문화코드로 자리매김하고 있는데, 관련해서 냇 킹 콜의 노래 'Route 66'가 유명하다. 이 노래는 리듬 앤 블루스의 명곡이라 엘비스 프레슬 리 등 많은 가수가 커버하였다. 심지어 미국을 밟아본 적도, 저 도로를 들어본 적도 없는 한국인들이 맥주 파는 펍이나 재즈바에서 저 Route 66 간판은 소 품으로 봐서 익숙할 정도. #영문 위키피디아의 노래 설명 이러한 문화적 이유로 인해 2000년대 들어 국도 전 구간이 복원되었다. 복원 되었다는 말에서 보듯 원래는 44번 고속도로(인터스테이트 하이웨이)가 개통 된 후 구간구간이 뚝뚝 끊기고 전체적으로 교통량이 줄어 결국 1985년 6월 26일부로 국도지정 해제되었었다. 게다가 이 44번 인터스테이트 하이웨이는 미국 최초의 고속도로이기도 하다. 그러나 한 시대의 문화적 아이콘이 사람 들에게 주는 정서적 영감은 대단한 것이어서, 2003년에는 전 구간 복원이 완 료되어 주로 관광객이나 옛 추억을 떠올리려는 미국인들이 여전히 이 도로를 이용하고 있다. 이런 사정을 담은 영상물이 바로 디즈니의 카(애니메이션)."
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gingerbread_House_Essex_CT.jpg/220px-Gingerbread_House_Essex_CT.jpg",
    location: "서울시 마포구 신수동 정하상관 1032호",
    title: "타이틀2222222222",
    number: "3",
    desc:
      "미국의 국도(US 하이웨이) 제66호선. 일리노이주 시카고와 캘리포니아주 로 스앤젤레스를 잇는 총연장 3,940km의 일반국도였다. 애리조나를 관통하여 시카고, LA, 라스베가스 등 주요 도시를 잇는 서부의 축선 중 하나였다.특히 이 도로는 Mother Road라고도 부를 정도로 미국인들에게는 촌동네 향수 비슷한 문화코드로 자리매김하고 있는데, 관련해서 냇 킹 콜의 노래 'Route 66'가 유명하다. 이 노래는 리듬 앤 블루스의 명곡이라 엘비스 프레슬 리 등 많은 가수가 커버하였다. 심지어 미국을 밟아본 적도, 저 도로를 들어본 적도 없는 한국인들이 맥주 파는 펍이나 재즈바에서 저 Route 66 간판은 소 품으로 봐서 익숙할 정도. #영문 위키피디아의 노래 설명 이러한 문화적 이유로 인해 2000년대 들어 국도 전 구간이 복원되었다. 복원 되었다는 말에서 보듯 원래는 44번 고속도로(인터스테이트 하이웨이)가 개통 된 후 구간구간이 뚝뚝 끊기고 전체적으로 교통량이 줄어 결국 1985년 6월 26일부로 국도지정 해제되었었다. 게다가 이 44번 인터스테이트 하이웨이는 미국 최초의 고속도로이기도 하다. 그러나 한 시대의 문화적 아이콘이 사람 들에게 주는 정서적 영감은 대단한 것이어서, 2003년에는 전 구간 복원이 완 료되어 주로 관광객이나 옛 추억을 떠올리려는 미국인들이 여전히 이 도로를 이용하고 있다. 이런 사정을 담은 영상물이 바로 디즈니의 카(애니메이션)."
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gingerbread_House_Essex_CT.jpg/220px-Gingerbread_House_Essex_CT.jpg",
    location: "서울시 마포구 신수동 정하상관 1032호",
    title: "타이틀2222222222",
    number: "4",
    desc:
      "미국의 국도(US 하이웨이) 제66호선. 일리노이주 시카고와 캘리포니아주 로 스앤젤레스를 잇는 총연장 3,940km의 일반국도였다. 애리조나를 관통하여 시카고, LA, 라스베가스 등 주요 도시를 잇는 서부의 축선 중 하나였다.특히 이 도로는 Mother Road라고도 부를 정도로 미국인들에게는 촌동네 향수 비슷한 문화코드로 자리매김하고 있는데, 관련해서 냇 킹 콜의 노래 'Route 66'가 유명하다. 이 노래는 리듬 앤 블루스의 명곡이라 엘비스 프레슬 리 등 많은 가수가 커버하였다. 심지어 미국을 밟아본 적도, 저 도로를 들어본 적도 없는 한국인들이 맥주 파는 펍이나 재즈바에서 저 Route 66 간판은 소 품으로 봐서 익숙할 정도. #영문 위키피디아의 노래 설명 이러한 문화적 이유로 인해 2000년대 들어 국도 전 구간이 복원되었다. 복원 되었다는 말에서 보듯 원래는 44번 고속도로(인터스테이트 하이웨이)가 개통 된 후 구간구간이 뚝뚝 끊기고 전체적으로 교통량이 줄어 결국 1985년 6월 26일부로 국도지정 해제되었었다. 게다가 이 44번 인터스테이트 하이웨이는 미국 최초의 고속도로이기도 하다. 그러나 한 시대의 문화적 아이콘이 사람 들에게 주는 정서적 영감은 대단한 것이어서, 2003년에는 전 구간 복원이 완 료되어 주로 관광객이나 옛 추억을 떠올리려는 미국인들이 여전히 이 도로를 이용하고 있다. 이런 사정을 담은 영상물이 바로 디즈니의 카(애니메이션)."
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gingerbread_House_Essex_CT.jpg/220px-Gingerbread_House_Essex_CT.jpg",
    location: "서울시 마포구 신수동 정하상관 1032호",
    title: "타이틀2222222222",
    number: "5",
    desc:
      "미국의 국도(US 하이웨이) 제66호선. 일리노이주 시카고와 캘리포니아주 로 스앤젤레스를 잇는 총연장 3,940km의 일반국도였다. 애리조나를 관통하여 시카고, LA, 라스베가스 등 주요 도시를 잇는 서부의 축선 중 하나였다.특히 이 도로는 Mother Road라고도 부를 정도로 미국인들에게는 촌동네 향수 비슷한 문화코드로 자리매김하고 있는데, 관련해서 냇 킹 콜의 노래 'Route 66'가 유명하다. 이 노래는 리듬 앤 블루스의 명곡이라 엘비스 프레슬 리 등 많은 가수가 커버하였다. 심지어 미국을 밟아본 적도, 저 도로를 들어본 적도 없는 한국인들이 맥주 파는 펍이나 재즈바에서 저 Route 66 간판은 소 품으로 봐서 익숙할 정도. #영문 위키피디아의 노래 설명 이러한 문화적 이유로 인해 2000년대 들어 국도 전 구간이 복원되었다. 복원 되었다는 말에서 보듯 원래는 44번 고속도로(인터스테이트 하이웨이)가 개통 된 후 구간구간이 뚝뚝 끊기고 전체적으로 교통량이 줄어 결국 1985년 6월 26일부로 국도지정 해제되었었다. 게다가 이 44번 인터스테이트 하이웨이는 미국 최초의 고속도로이기도 하다. 그러나 한 시대의 문화적 아이콘이 사람 들에게 주는 정서적 영감은 대단한 것이어서, 2003년에는 전 구간 복원이 완 료되어 주로 관광객이나 옛 추억을 떠올리려는 미국인들이 여전히 이 도로를 이용하고 있다. 이런 사정을 담은 영상물이 바로 디즈니의 카(애니메이션)."
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gingerbread_House_Essex_CT.jpg/220px-Gingerbread_House_Essex_CT.jpg",
    location: "서울시 마포구 신수동 정하상관 1032호",
    title: "타이틀2222222222",
    number: "6",
    desc:
      "미국의 국도(US 하이웨이) 제66호선. 일리노이주 시카고와 캘리포니아주 로 스앤젤레스를 잇는 총연장 3,940km의 일반국도였다. 애리조나를 관통하여 시카고, LA, 라스베가스 등 주요 도시를 잇는 서부의 축선 중 하나였다.특히 이 도로는 Mother Road라고도 부를 정도로 미국인들에게는 촌동네 향수 비슷한 문화코드로 자리매김하고 있는데, 관련해서 냇 킹 콜의 노래 'Route 66'가 유명하다. 이 노래는 리듬 앤 블루스의 명곡이라 엘비스 프레슬 리 등 많은 가수가 커버하였다. 심지어 미국을 밟아본 적도, 저 도로를 들어본 적도 없는 한국인들이 맥주 파는 펍이나 재즈바에서 저 Route 66 간판은 소 품으로 봐서 익숙할 정도. #영문 위키피디아의 노래 설명 이러한 문화적 이유로 인해 2000년대 들어 국도 전 구간이 복원되었다. 복원 되었다는 말에서 보듯 원래는 44번 고속도로(인터스테이트 하이웨이)가 개통 된 후 구간구간이 뚝뚝 끊기고 전체적으로 교통량이 줄어 결국 1985년 6월 26일부로 국도지정 해제되었었다. 게다가 이 44번 인터스테이트 하이웨이는 미국 최초의 고속도로이기도 하다. 그러나 한 시대의 문화적 아이콘이 사람 들에게 주는 정서적 영감은 대단한 것이어서, 2003년에는 전 구간 복원이 완 료되어 주로 관광객이나 옛 추억을 떠올리려는 미국인들이 여전히 이 도로를 이용하고 있다. 이런 사정을 담은 영상물이 바로 디즈니의 카(애니메이션)."
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gingerbread_House_Essex_CT.jpg/220px-Gingerbread_House_Essex_CT.jpg",
    location: "서울시 마포구 신수동 정하상관 1032호",
    title: "타이틀2222222222",
    number: "7",
    desc:
      "미국의 국도(US 하이웨이) 제66호선. 일리노이주 시카고와 캘리포니아주 로 스앤젤레스를 잇는 총연장 3,940km의 일반국도였다. 애리조나를 관통하여 시카고, LA, 라스베가스 등 주요 도시를 잇는 서부의 축선 중 하나였다.특히 이 도로는 Mother Road라고도 부를 정도로 미국인들에게는 촌동네 향수 비슷한 문화코드로 자리매김하고 있는데, 관련해서 냇 킹 콜의 노래 'Route 66'가 유명하다. 이 노래는 리듬 앤 블루스의 명곡이라 엘비스 프레슬 리 등 많은 가수가 커버하였다. 심지어 미국을 밟아본 적도, 저 도로를 들어본 적도 없는 한국인들이 맥주 파는 펍이나 재즈바에서 저 Route 66 간판은 소 품으로 봐서 익숙할 정도. #영문 위키피디아의 노래 설명 이러한 문화적 이유로 인해 2000년대 들어 국도 전 구간이 복원되었다. 복원 되었다는 말에서 보듯 원래는 44번 고속도로(인터스테이트 하이웨이)가 개통 된 후 구간구간이 뚝뚝 끊기고 전체적으로 교통량이 줄어 결국 1985년 6월 26일부로 국도지정 해제되었었다. 게다가 이 44번 인터스테이트 하이웨이는 미국 최초의 고속도로이기도 하다. 그러나 한 시대의 문화적 아이콘이 사람 들에게 주는 정서적 영감은 대단한 것이어서, 2003년에는 전 구간 복원이 완 료되어 주로 관광객이나 옛 추억을 떠올리려는 미국인들이 여전히 이 도로를 이용하고 있다. 이런 사정을 담은 영상물이 바로 디즈니의 카(애니메이션)."
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gingerbread_House_Essex_CT.jpg/220px-Gingerbread_House_Essex_CT.jpg",
    location: "서울시 마포구 신수동 정하상관 1032호",
    title: "타이틀2222222222",
    number: "8",
    desc:
      "미국의 국도(US 하이웨이) 제66호선. 일리노이주 시카고와 캘리포니아주 로 스앤젤레스를 잇는 총연장 3,940km의 일반국도였다. 애리조나를 관통하여 시카고, LA, 라스베가스 등 주요 도시를 잇는 서부의 축선 중 하나였다.특히 이 도로는 Mother Road라고도 부를 정도로 미국인들에게는 촌동네 향수 비슷한 문화코드로 자리매김하고 있는데, 관련해서 냇 킹 콜의 노래 'Route 66'가 유명하다. 이 노래는 리듬 앤 블루스의 명곡이라 엘비스 프레슬 리 등 많은 가수가 커버하였다. 심지어 미국을 밟아본 적도, 저 도로를 들어본 적도 없는 한국인들이 맥주 파는 펍이나 재즈바에서 저 Route 66 간판은 소 품으로 봐서 익숙할 정도. #영문 위키피디아의 노래 설명 이러한 문화적 이유로 인해 2000년대 들어 국도 전 구간이 복원되었다. 복원 되었다는 말에서 보듯 원래는 44번 고속도로(인터스테이트 하이웨이)가 개통 된 후 구간구간이 뚝뚝 끊기고 전체적으로 교통량이 줄어 결국 1985년 6월 26일부로 국도지정 해제되었었다. 게다가 이 44번 인터스테이트 하이웨이는 미국 최초의 고속도로이기도 하다. 그러나 한 시대의 문화적 아이콘이 사람 들에게 주는 정서적 영감은 대단한 것이어서, 2003년에는 전 구간 복원이 완 료되어 주로 관광객이나 옛 추억을 떠올리려는 미국인들이 여전히 이 도로를 이용하고 있다. 이런 사정을 담은 영상물이 바로 디즈니의 카(애니메이션)."
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gingerbread_House_Essex_CT.jpg/220px-Gingerbread_House_Essex_CT.jpg",
    location: "서울시 마포구 신수동 정하상관 1032호",
    title: "타이틀2222222222",
    number: "9",
    desc:
      "미국의 국도(US 하이웨이) 제66호선. 일리노이주 시카고와 캘리포니아주 로 스앤젤레스를 잇는 총연장 3,940km의 일반국도였다. 애리조나를 관통하여 시카고, LA, 라스베가스 등 주요 도시를 잇는 서부의 축선 중 하나였다.특히 이 도로는 Mother Road라고도 부를 정도로 미국인들에게는 촌동네 향수 비슷한 문화코드로 자리매김하고 있는데, 관련해서 냇 킹 콜의 노래 'Route 66'가 유명하다. 이 노래는 리듬 앤 블루스의 명곡이라 엘비스 프레슬 리 등 많은 가수가 커버하였다. 심지어 미국을 밟아본 적도, 저 도로를 들어본 적도 없는 한국인들이 맥주 파는 펍이나 재즈바에서 저 Route 66 간판은 소 품으로 봐서 익숙할 정도. #영문 위키피디아의 노래 설명 이러한 문화적 이유로 인해 2000년대 들어 국도 전 구간이 복원되었다. 복원 되었다는 말에서 보듯 원래는 44번 고속도로(인터스테이트 하이웨이)가 개통 된 후 구간구간이 뚝뚝 끊기고 전체적으로 교통량이 줄어 결국 1985년 6월 26일부로 국도지정 해제되었었다. 게다가 이 44번 인터스테이트 하이웨이는 미국 최초의 고속도로이기도 하다. 그러나 한 시대의 문화적 아이콘이 사람 들에게 주는 정서적 영감은 대단한 것이어서, 2003년에는 전 구간 복원이 완 료되어 주로 관광객이나 옛 추억을 떠올리려는 미국인들이 여전히 이 도로를 이용하고 있다. 이런 사정을 담은 영상물이 바로 디즈니의 카(애니메이션)."
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gingerbread_House_Essex_CT.jpg/220px-Gingerbread_House_Essex_CT.jpg",
    location: "서울시 마포구 신수동 정하상관 1032호",
    title: "타이틀2222222222",
    number: "10",
    desc:
      "미국의 국도(US 하이웨이) 제66호선. 일리노이주 시카고와 캘리포니아주 로 스앤젤레스를 잇는 총연장 3,940km의 일반국도였다. 애리조나를 관통하여 시카고, LA, 라스베가스 등 주요 도시를 잇는 서부의 축선 중 하나였다.특히 이 도로는 Mother Road라고도 부를 정도로 미국인들에게는 촌동네 향수 비슷한 문화코드로 자리매김하고 있는데, 관련해서 냇 킹 콜의 노래 'Route 66'가 유명하다. 이 노래는 리듬 앤 블루스의 명곡이라 엘비스 프레슬 리 등 많은 가수가 커버하였다. 심지어 미국을 밟아본 적도, 저 도로를 들어본 적도 없는 한국인들이 맥주 파는 펍이나 재즈바에서 저 Route 66 간판은 소 품으로 봐서 익숙할 정도. #영문 위키피디아의 노래 설명 이러한 문화적 이유로 인해 2000년대 들어 국도 전 구간이 복원되었다. 복원 되었다는 말에서 보듯 원래는 44번 고속도로(인터스테이트 하이웨이)가 개통 된 후 구간구간이 뚝뚝 끊기고 전체적으로 교통량이 줄어 결국 1985년 6월 26일부로 국도지정 해제되었었다. 게다가 이 44번 인터스테이트 하이웨이는 미국 최초의 고속도로이기도 하다. 그러나 한 시대의 문화적 아이콘이 사람 들에게 주는 정서적 영감은 대단한 것이어서, 2003년에는 전 구간 복원이 완 료되어 주로 관광객이나 옛 추억을 떠올리려는 미국인들이 여전히 이 도로를 이용하고 있다. 이런 사정을 담은 영상물이 바로 디즈니의 카(애니메이션)."
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gingerbread_House_Essex_CT.jpg/220px-Gingerbread_House_Essex_CT.jpg",
    location: "서울시 마포구 신수동 정하상관 1032호",
    title: "타이틀2222222222",
    number: "11",
    desc:
      "미국의 국도(US 하이웨이) 제66호선. 일리노이주 시카고와 캘리포니아주 로 스앤젤레스를 잇는 총연장 3,940km의 일반국도였다. 애리조나를 관통하여 시카고, LA, 라스베가스 등 주요 도시를 잇는 서부의 축선 중 하나였다.특히 이 도로는 Mother Road라고도 부를 정도로 미국인들에게는 촌동네 향수 비슷한 문화코드로 자리매김하고 있는데, 관련해서 냇 킹 콜의 노래 'Route 66'가 유명하다. 이 노래는 리듬 앤 블루스의 명곡이라 엘비스 프레슬 리 등 많은 가수가 커버하였다. 심지어 미국을 밟아본 적도, 저 도로를 들어본 적도 없는 한국인들이 맥주 파는 펍이나 재즈바에서 저 Route 66 간판은 소 품으로 봐서 익숙할 정도. #영문 위키피디아의 노래 설명 이러한 문화적 이유로 인해 2000년대 들어 국도 전 구간이 복원되었다. 복원 되었다는 말에서 보듯 원래는 44번 고속도로(인터스테이트 하이웨이)가 개통 된 후 구간구간이 뚝뚝 끊기고 전체적으로 교통량이 줄어 결국 1985년 6월 26일부로 국도지정 해제되었었다. 게다가 이 44번 인터스테이트 하이웨이는 미국 최초의 고속도로이기도 하다. 그러나 한 시대의 문화적 아이콘이 사람 들에게 주는 정서적 영감은 대단한 것이어서, 2003년에는 전 구간 복원이 완 료되어 주로 관광객이나 옛 추억을 떠올리려는 미국인들이 여전히 이 도로를 이용하고 있다. 이런 사정을 담은 영상물이 바로 디즈니의 카(애니메이션)."
  }
];

const initialState = Map({
  loading: false,
  id: undefined, // 임시. 원래는 undefined
  error: "",
  page: "login",
  region: undefined, // 임시. 원래는 undefined
  personality: undefined,
  feed: [],
  favorites: [],
  showFavorites: false,
  detail: {}
});

const reducer = (state, action) => {
  console.log(state, action, action.type);
  switch (action.type) {
    case "LOGIN_TRY":
      return state
        .set("loading", true)
        .set("id", undefined)
        .set("error", "로딩중...");
    case "LOGIN_SUCCESS":
      return state
        .set("loading", false)
        .set("id", action.payload)
        .set("error", undefined);
    case "LOGIN_FAIL":
      return state.set("loading", false).set("error", "로그인에 실패했습니다.");
    case "REGISTER_SUCCESS":
      return state
        .set("loading", false)
        .set("page", "login")
        .set("error", "회원가입에 성공했습니다. 로그인 해 주세요.");
    case "REGISTER_FAIL":
      return state.set("loading", false).set("error", action.payload);

    case "UPDATE_REGION":
      return state.set("region", action.payload);
    case "UPDATE_PERSONALITY":
      return state.set("personality", action.payload);
    case "UPDATE_FEED":
      const { feed } = action.payload;
      return state.set("feed", feed);
    case "UPDATE_FAVORITES":
      return state.set("favorites", action.payload);

    case "GET_FAVORITES":
      // 즐겨찾기 모드 on / off 무관하게 새 정보 받아오는 걸로
      return state.set("favorites", action.payload).set("showFavorites", !action.payload.showFavorites);
    case "TOGGLE_SHOW_FAVORITES":
      return state.set("showFavorites", !state.get("showFavorites"));

    case "UPDATE_DETAIL":
      return state.set("detail", action.payload);
    case "FAIL_UPDATE_DETAIL":
      return state.set("detail", {});

    case "CLEAR_REGION":
      return state.set("region", undefined);
    case "CLEAR_PERSONALITY":
      return state.set("personality", undefined);

    case "GOTO_REGISTER":
      return state.set("page", "register");
    case "GOTO_LOGIN":
      return state.set("page", "login");

    case "CUSTOM_ERROR":
      return state.set("error", action.payload);
    case "CLAER_ERROR":
      return state.set("error", undefined);
    default:
      return state;
  }
};

const useGlobalReducer = () => {
  return useReducer(reducer, initialState);
};

export default useGlobalReducer;