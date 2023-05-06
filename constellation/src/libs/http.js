import axios from "axios";
import { JUHE_KEYS } from "@/configs/keys";

function axiosGet (options) {
      axios(options.url + "&key=" + JUHE_KEYS)
      .then((res) => {
            options.success(res.data);
      })
      .catch((err) => {
            options.success(err);
      })
}

export {
      axiosGet
}