export interface Planet {
  name: string
  coordinate: Array<number>
  situation: "Habitado" | "Habitável" | "Inabitável" | "Inexplorado"
  satellites?: Array<string>
}