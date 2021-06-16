// @ts-nocheck

import { PostRequestDto, PostResponseDto } from './bootstrap'

const body = {
  title: 'part 4',
  content: 'learning about dtos and layers I think?',
  realProp: 'uhu',
  nonsense: 'esnesnon',
}

describe('bootstrap', () => {
  describe('Request dto', () => {
    it('should have a static method called from', () => {
      expect(PostRequestDto.from).toBeDefined()
    })

    it('should check if the given body data has the required properties and otherwise throw an error', () => {
      expect(() =>
        PostRequestDto.from({ title: undefined, body: 'hi' })
      ).toThrowError()
    })

    it('should  map out all the unwanted properties', () => {
      expect(PostRequestDto.from(body)).toEqual({
        title: body.title,
        content: body.content,
      })
    })

    it('should return an instance of the dto', () => {
      expect(PostRequestDto.from(body)).toStrictEqual(PostRequestDto.from(body))
    })
  })

  describe('Response dto', () => {
    it('should have a static method called from', () => {
      expect(PostResponseDto.from).toBeDefined()
    })

    it('should map out all the unwanted properties', () => {
      expect(PostResponseDto.from(PostResponseDto.from(body))).toEqual({
        title: body.title,
        content: body.content,
      })
    })

    it('should return an instance of the dto', () => {
      expect(PostResponseDto.from(body)).toStrictEqual(
        new PostResponseDto(body.title, body.content)
      )
    })
  })
})
