export interface ITrainStop {
    location: string;
    distance: number;
    id: string;
    tripCompletion: number;
}

export interface ITrainMap {
    id: number;
    name: string;
    length: number;
    capacity: number;
    direction: string;
    items: ITrainStop[];
}
