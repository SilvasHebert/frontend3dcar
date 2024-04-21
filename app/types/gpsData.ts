export type Coord = {
  latitude: number;
  longitude: number;
};

export type Region = Coord & {
  latitudeDelta: number;
  longitudeDelta: number;
};

export type Gps = {
  longitude: number;
  latitude: number;
  acquisition_time_unix: number;
  speed: number;
  direction: number;
  acquisition_time: string;
  address?: string;
};

export type Course = {
  start_at: string;
  end_at: string;
  distance: number;
  speed_max: number;
  stops: number;
  total_stop_time: number;
  gps_count: number;
  duration: number;
  speed_avg: number;
  gps: Gps[];
};

export type FullCourse = {
  accOn: string;
  total_time: number;
  total_distance: number;
  speed_max: number;
  speed_avg: number;
  num_courses: number;
  stops: number;
  total_stop_time: number;
  perc_fixed: number;
  gps_count: number;
  courses: Course[];
  vehicle: {
    plate: string;
    vin: string;
    color: string;
    picture: {
      address: string;
    };
  };
};
