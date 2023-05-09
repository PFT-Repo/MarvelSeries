import { TestBed } from "@angular/core/testing";

import { ComicDto2VmService } from "./comic-dto-2-vm.service";

describe("ComicDto2VmService", () => {
  let service: ComicDto2VmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicDto2VmService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
