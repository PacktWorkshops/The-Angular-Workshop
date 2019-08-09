export interface ITrainStop {
    location: string;
    distance: number;
    id: string;
    tripCompletion: number;
}

export interface ITrainMap {
    id: string;
    name: string;
    length: number;
    capacity: number;
    direction: string;
    items: ITrainStop[];
}
